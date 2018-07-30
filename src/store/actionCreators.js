import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION,GET_INIT_LIST} from "./actionTypes";
// import axios from 'axios';//redux-thunk 调用

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM,
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});

export const getInitList=()=>({
   type:GET_INIT_LIST,
});

//redux-thunk 的写法
// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('/list/todoList')
//             .then((res) => {
//                 const data = res.data;
//                 const action = initListAction(data);
//                 dispatch(action)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }
// };

