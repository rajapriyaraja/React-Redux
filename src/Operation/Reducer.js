import * as Types from "./Type";

export const InitialState = {
    users: [],
    name: '',
    password: '',
    selectedUser: null
};

export function Reducer(state, action) {
    switch (action.type) {
        case Types.USER_NAME:
            return {
                ...state,
                name: action.payload
            };

        case Types.USER_PASSWORD:
            return {
                ...state,
                password: action.payload
            };

        case Types.FORM_SUBMIT:
            return {
                ...state,
                users: [...state.users, { id: Date.now(), name: state.name, password: state.password }],
                name: '',
                password: ''
            };

        case Types.DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            };

        case Types.EDIT_USER:
            return {
                ...state,
                name: action.payload.name,
                password: action.payload.password,
                selectedUser: action.payload.user
            };

        case Types.UPDATE_USER:
            return {
                ...state,
                users: state.users.map(user => (user.id === state.selectedUser.id ? { ...user, name: state.name, password: state.password } : user)),
                name: '',
                password: '',
                selectedUser: null
            };
        default:
            return state;
    }
}