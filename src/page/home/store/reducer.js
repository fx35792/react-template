import {fromJS} from 'immutable';
import {constants} from './index'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    backVisible: false,
});

const getChangeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
    });
};

const getAddArticleList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    });
};
const getChangeBackVisible = (state, action) => {
    return state.set('backVisible', action.backVisible);
};

export default (state = defaultState, action) => {
    // console.log(action.type);
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return getChangeHomeData(state, action);
        case constants.ADD_ARTICLE_LIST:
            return getAddArticleList(state, action);
        case constants.CHANGE_BACK_VISIBLE:
            return getChangeBackVisible(state, action);
        default:
            return state
    }
}