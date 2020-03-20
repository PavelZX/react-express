import * as types from '../constants/action_types'
import { API_CALL, POST, GET, PUT, DELETE } from '../constants/api_types'


export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("http://localhost:4000/api/profile", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            // Будет ошибка если token не дествительный
            localStorage.removeItem("token")
          } else {
            dispatch(loginUser(data.user))
          }
        })
    }
  }
}

export function addUser(user) {
  return {
    type: types.ADD_USER,
    payload: {user}
  }
}

