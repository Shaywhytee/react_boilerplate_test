import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ContentContext } from '../../../utils/content';
import AboutSquares from '../aboutSquares';

Enzyme.configure({ adapter: new Adapter() });

// Mocked data for ContentContext
const contentData = [
  { name: 'textbox1', title: 'Title 1', content: 'Content 1' },
  { name: 'textbox2', title: 'Title 2', content: 'Content 2' },
  { name: 'textbox3', title: 'Title 3', content: 'Content 3' },
];
const photoUrls = [
  'url1',
  'url2',
  'url3',
  'url4',
  'url5',
  'url6',
  'url7',
  'url8',
  'url9',
  'url10',
  'url11',
];

test('renders without crashing', () => {
  shallow(
    <ContentContext.Provider value={{ contentData, photoUrls }}>
      <AboutSquares />
    </ContentContext.Provider>,
  );
});
