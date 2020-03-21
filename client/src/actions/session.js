import { push }                           from 'react-router-redux';
import Constants                          from '../constants';
import { httpGet, httpPost, httpDelete }  from '../../utils';

export const userLoginFetch = user => {
  return dispatch => {
    return fetch("http://localhost:4000/api/login", {
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
         //тут ваша логика
        } else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
        }
      })
  }
}
