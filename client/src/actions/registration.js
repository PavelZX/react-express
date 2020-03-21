import { push }   from 'react-router-redux';
import Constants          from '../constants';
import { httpPost }       from '../../utils';
import {setCurrentUser}   from './session';

export const userPostFetch = user => {
  return dispatch => {
    return fetch("http://localhost:4000/api/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          //Тут прописываем логику
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})
