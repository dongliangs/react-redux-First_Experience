import axios from 'axios';
const LOGIN = 'login';
const LOGOUT = 'logout';
const USER_DATA = 'user_data'

const initState = {
    isLogin: false,
    data:[]
}
export function sign(state = initState, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, isLogin: true };
        case LOGOUT:
            return { ...state, isLogin: false };
        case USER_DATA:
            return {...state, data:action.proload}
        default:
            return state

    }
}
export function getUserData() {
    return dispatch => {
        axios.get('./data')
            .then(res => {
                if (res.status === 200) {
                    dispatch(UserData(res.data))
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
}
function UserData(data) {
    return {type:USER_DATA, proload:data}
}
export function login() {
    return { type: LOGIN }
}
export function logout() {
    return { type: LOGOUT }
}