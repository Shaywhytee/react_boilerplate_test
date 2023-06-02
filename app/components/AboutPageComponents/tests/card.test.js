import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CardDeck from '../Cards/cards';

Enzyme.configure({ adapter: new Adapter() });
// Render Test
test('renders without crashing', () => {
  shallow(<CardDeck />);
});
// Next Button Test
test('clicking next button updates active card index', () => {
  const wrapper = shallow(<CardDeck />);
  const { activeCardIndex } = wrapper
    .find('CardDeck')
    .first()
    .props();
  expect(activeCardIndex).toBe(0);
  const nextButton = wrapper.find('.next_button');
  nextButton.simulate('click');
  expect(
    wrapper
      .find('CardDeck')
      .first()
      .props().activeCardIndex,
  ).toBe(1);
});
// Prev Button Test
test('clicking prev button updates active card index', () => {
  const wrapper = shallow(<CardDeck />);
  const { activeCardIndex } = wrapper
    .find('CardDeck')
    .first()
    .props();
  expect(activeCardIndex).toBe(0);
  const prevButton = wrapper.find('.prev_button');
  prevButton.simulate('click');
  expect(
    wrapper
      .find('CardDeck')
      .first()
      .props().activeCardIndex,
  ).toBe(2);
});
