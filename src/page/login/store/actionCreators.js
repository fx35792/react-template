import axios from 'axios';
import * as constants from './constants';

const getChangeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
});


export const logout = () => ({
    type: constants.CHANGE_LOGOUT,
    value: false
});

export const changeLogin = (account, password) => {
    return (dispatch) => {
        axios.get('api/login.json?account=' + account + '&password=' + password)
            .then((res) => {
                const result = res.data.data;
                if (result) {
                    dispatch(getChangeLogin())
                } else {
                    alert('登录失败')
                }

            })
            .catch(() => {
                console.log('error')
            })
    }
};
