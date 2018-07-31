import axios from 'axios';
import {fromJS} from 'immutable';
import * as constants from './constants';

export const getInputFocus = () => ({
    type: constants.INPUT_FOCUS,
});

export const getInputBlur = () => ({
    type: constants.INPUT_BLUR
});

export const getMouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const getMouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
});


/*** 当前页面调用方法 ***/
const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/search.json')
            .then((res) => {
                dispatch(changeList(res.data))
            })
            .catch(() => {
                console.log('error')
            })
    }
};