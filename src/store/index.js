import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';//redux-thunk 引入
import createSagaMiddleware from 'redux-saga'//redux-saga 引入
import todoSaga from './sagas'; //引入编写的saga文件

import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();//redux-saga 调用

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    // applyMiddleware(thunk),//redux-thunk 写法
    applyMiddleware(sagaMiddleware),//redux-saga 中间件调用
);
const store = createStore(reducer, enhancer);

sagaMiddleware.run(todoSaga);//执行saga文件

export default store;