import {combineReducers} from 'redux-immutable';
import {reducer as reducerHeader} from '../common/header/store';
import {reducer as reducerHome} from '../page/home/store';

const reducer = combineReducers({
    header: reducerHeader,
    home: reducerHome
});
export default reducer;
