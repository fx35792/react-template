import {combineReducers} from 'redux-immutable';
import {reducer as reducerHeader} from '../common/header/store';
import {reducer as reducerHome} from '../page/home/store';
import {reducer as reducerDetail} from '../page/detail/store';

const reducer = combineReducers({
    header: reducerHeader,
    home: reducerHome,
    detail: reducerDetail
});
export default reducer;
