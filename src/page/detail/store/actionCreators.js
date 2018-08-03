import axios from 'axios';
import {constants} from './index';

const detailData = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content,
});

export const getDetailData = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id)
            .then((res) => {
                const result = res.data.data;
                dispatch(detailData(result.title, result.content))
            })
    }
};
