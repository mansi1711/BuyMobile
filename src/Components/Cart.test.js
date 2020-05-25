import React from 'react';
import { mount } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  let app = mount(<Home />);

  it('renders the continue shopping button', () => {
    expect(app.find('.btn').at(0).text()).toEqual('Continue Shopping');
  });

    it('renders a Card ', () => {
      expect(app.find('Card').exists()).toBe(true);
    });

      afterEach(() => {
        app.find('.btn').at(1).simulate('click');
      });

});