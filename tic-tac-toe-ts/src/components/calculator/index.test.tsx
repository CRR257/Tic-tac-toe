import React from 'react';
import Calculator from './index';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

const middlewares: any = []
const mockStore = configureStore(middlewares)
const addTodo = () => ({ type: 'INCREMENT, DECREMENT, MULTIPLY, DIVIDE' })

let ResetButton = () => <div />;
const mockHandleClick = jest.fn();

describe("Calculator", () => {
    it('should render component', () => {  
        const component = renderer.create(<Provider store={store}><Calculator /></Provider>).toJSON();
        expect(component).toMatchSnapshot();
    });

    it("should render title", () => {
        const component = renderer.create(<p>Calculator</p>).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('should dispatch action', () => {
        const initialState = {};
        const store = mockStore(initialState);
        store.dispatch(addTodo());

        const actions = store.getActions();
        const expectedPayload = { type: 'INCREMENT, DECREMENT, MULTIPLY, DIVIDE' };
        expect(actions).toEqual([expectedPayload]);
    });

    it ('should contains a resetButton', () => {
        const component = renderer.create(<ResetButton/>).toJSON();
        expect(component).toMatchSnapshot();
    });

    it("should Button component fires callback function onClick", () => {
        const component = shallow(<button onClick={mockHandleClick}>Button</button>);
        component.find("button").simulate("click");
        expect(mockHandleClick).toHaveBeenCalled();
    });
})

// https://willowtreeapps.com/ideas/best-practices-for-unit-testing-with-a-react-redux-approach
// https://www.digitalocean.com/community/tutorials/how-to-write-snapshot-tests-for-react-components-with-jest
// https://docs.reactioncommerce.com/docs/react-testing