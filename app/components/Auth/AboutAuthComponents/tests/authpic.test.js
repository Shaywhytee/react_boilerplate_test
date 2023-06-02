import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PictureBoxes from '../aboutPictureBoxes';

Enzyme.configure({ adapter: new Adapter() });
// Mock Fetch Test
describe('PictureBoxes', () => {
  test('handles file changes and upload', async () => {
    const mockFetch = jest.fn(() => Promise.resolve({}));
    global.fetch = mockFetch;

    const wrapper = shallow(<PictureBoxes />);
    const fileInput1 = wrapper.find('input[type="file"]').at(0);
    const fileInput2 = wrapper.find('input[type="file"]').at(1);
    const fileInput3 = wrapper.find('input[type="file"]').at(2);

    const file1 = new File(['file content'], 'photo_box_1.jpg', {
      type: 'image/jpeg',
    });
    const file2 = new File(['file content'], 'photo_box_2.jpg', {
      type: 'image/jpeg',
    });
    const file3 = new File(['file content'], 'photo_box_3.jpg', {
      type: 'image/jpeg',
    });

    fileInput1.simulate('change', { target: { files: [file1] } });
    fileInput2.simulate('change', { target: { files: [file2] } });
    fileInput3.simulate('change', { target: { files: [file3] } });

    const uploadButton = wrapper.find('button');
    uploadButton.simulate('click');

    await Promise.resolve();

    expect(mockFetch).toHaveBeenCalledTimes(2);
    expect(mockFetch).toHaveBeenCalledWith(
      'https://storage.googleapis.com/honest_editz_images/photo_box_1.jpg',
      expect.objectContaining({ method: 'PUT' }),
    );
    expect(mockFetch).toHaveBeenCalledWith(
      'https://storage.googleapis.com/honest_editz_images/photo_box_2.jpg',
      expect.objectContaining({ method: 'PUT' }),
    );
    expect(mockFetch).toHaveBeenCalledWith(
      'https://storage.googleapis.com/honest_editz_images/photo_box_3.jpg',
      expect.objectContaining({ method: 'PUT' }),
    );

    mockFetch.mockRestore();
  });
});
