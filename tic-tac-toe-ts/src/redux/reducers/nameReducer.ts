import { NameActions } from "../actions/nameActions"
type NameState = {
    name1: string;
    name2: string;
};

const initialState: NameState = {
    name1: '',
    name2: '',
};

const NameReducer = (state: NameState = initialState, action: NameActions) => {
    switch (action.type) {
        case 'SET_NAME_1':
            return {
                ...state,
                name1: action.payload,
            }
        case 'SET_NAME_2':
            return {
                ...state,
                name2: action.payload,
            }
        default:
            return state;
    }
}
export default NameReducer;