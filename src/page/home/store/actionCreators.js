import {constants} from './index';
import axios from 'axios';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    recommendList: result.recommendList,
    articleList: result.articleList,
})

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