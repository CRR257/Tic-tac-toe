import { CountActions } from "../actions/countActions";

type CountState = {
    count: number;
}
const initialState: CountState = {
    count: 0,
}
const countReducer = (state: CountState = initialState, action: CountActions) => {
    switch(action.type) {
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - action.value,
            }
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + action.value,
            }
        case 'MULTIPLY':
            return {
                ...state,
                count: state.count * action.value,
            }
        case 'DIVIDE':
            return {
                ...state,
                count: Number((state.count / action.value).toFixed(2))
            }
        case 'RESET':
            return {
                ...state,
                count: 0
            }
            
        default:
            return state;
    }
}
export default countReducer;