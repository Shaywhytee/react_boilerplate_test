import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AboutTextBoxes from '../aboutTextBoxes';

Enzyme.configure({ adapter: new Adapter() });
// Mock Fetch Test
describe('AboutTextBoxes', () => {
  test('fetches data and saves changes', async () => {
    const mockFetch = jest.fn(() => Promise.resolve({}));
    global.fetch = mockFetch;
    mockFetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            { name: 'textbox1', title: 'Title 1', content: 'Content 1' },
            { name: 'textbox2', title: 'Title 2', content: 'Content 2' },
            { name: 'textbox3', title: 'Title 3', content: 'Content 3' },
          ]),
      }),
    );

    const wrapper = shallow(<AboutTextBoxes />);
    await Promise.resolve();

    expect(mockFetch).toHaveBeenCalledTimes(0);
    expect(wrapper.state('newTextBox1Title')).toBe('Title 1');
    expect(wrapper.state('newTextBox1Content')).toBe('Content 1');
    expect(wrapper.state('newTextBox2Title')).toBe('Title 2');
    expect(wrapper.state('newTextBox2Content')).toBe('Content 2');
    expect(wrapper.state('newTextBox3Title')).toBe('Title 3');
    expect(wrapper.state('newTextBox3Content')).toBe('Content 3');

    const saveButton = wrapper.find('button');
    saveButton.simulate('click');
    await Promise.resolve();

    expect(mockFetch).toHaveBeenCalledTimes(2);
    mockFetch.mockRestore();
  });
});
