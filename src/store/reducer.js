import {combineReducers} from 'redux-immutable';
import {reducer as reducerHeader} from '../common/header/store';
import {reducer as reducerHome} from '../page/home/store';
import {reducer as reducerDetail} from '../page/detail/store';
import {reducer as reducerLogin} from '../page/login/store';

const reducer = combineReducers({
    header: reducerHeader,
    home: reducerHome,
    detail: reducerDetail,
    login:reducerLogin
});
export default reducer;
