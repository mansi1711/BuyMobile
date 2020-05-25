import React from 'react';
import { mount } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  let app = mount(<Home />);

  it('renders the clear button', () => {
    expect(app.find('.btn').at(1).text()).toEqual('Next');
  });

    it('renders a Dropdown menu', () => {
      expect(app.find('Dropdown').exists()).toBe(true);
    });

      afterEach(() => {
        app.find('.btn').at(1).simulate('click');
      });

});