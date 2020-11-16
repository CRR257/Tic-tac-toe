import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

it('renders the component', () => {
  const component = shallow(<Provider store={store}><App /></Provider>);
  expect(component).toMatchSnapshot();
});

it("renders without crashing", () => {
  expect(shallow(<App />));
});