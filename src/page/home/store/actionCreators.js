import {constants} from './index';
import axios from 'axios';
import {fromJS} from 'immutable';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    recommendList: result.recommendList,
    articleList: result.articleList,
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
            .then((res) => {
                const result = res.data.data;
                const action = changeHomeData(result);
                dispatch(action)
            })
            .catch(() => {
                console.log('error')
            })
    }
};

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list.articleList),
    nextPage
});

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/articleList.json?page=' + page)
            .then((res) => {
                const result = res.data.data;
                const action = addHomeList(result, page + 1);
                dispatch(action);
            })
            .catch(() => {
                console.log('error');
            })
    }
};

const toggleTop = (backVisible) => ({
    type: constants.CHANGE_BACK_VISIBLE,
    backVisible
});

export const toggleTopShow = (flag) => {
    return (dispatch) => {
        dispatch(toggleTop(flag));
    }
};