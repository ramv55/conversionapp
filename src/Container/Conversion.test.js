import React from 'react';
import { render } from '@testing-library/react';
import Conversion from './Conversion';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

test('state testing', () => {
  const wrapper = mount(<Conversion />);
  wrapper.setState({ result: 1 });
  expect(wrapper.find('h3').text()).toContain(1);
});

it('Expects to run onClick function when button is pressed in the DOM', () => {
  const mockCallBackClick = jest.fn();
  const wrapper = mount(<button onClick={mockCallBackClick}>Test</button>);
  wrapper.find('button').simulate('click');
  expect(mockCallBackClick.mock.calls.length).toEqual(1);
});
