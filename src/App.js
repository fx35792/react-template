import React, {Component} from 'react';
import {
    getInitList,
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction,
} from './store/actionCreators'
import TodoListUi from './Components/TodoListUi';
import store from './store'
// import axios from 'axios';

class App extends Component {

    /***
     * 章节总结
     * 1.store必须是唯一的
     * 2.只有store能改变自己的内容
     * 3.reducer必须是一个纯函数 //纯函数指的是：给固定的输入，就一定会有固定的输出，而不会有任何副作用
     * @param props
     */

    constructor(props) {
        super(props);
        this.state = store.getState();

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange)
    }

    render() {
        const {inputValue, list} = this.state;
        return (
            <TodoListUi
                inputValue={inputValue}
                list={list}
                handleOnChange={this.handleOnChange}
                handleSearch={this.handleSearch}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }

    componentDidMount() {

        //传统写法
        // axios.get('list/todoList')
        //     .then((res) => {
        //         const data = res.data;
        //         const action = initListAction(data);
        //         store.dispatch(action)
        //     })
        //     .catch(() => {
        //
        //     });


        //redux-thunk 写法
        // const action = getTodoList();


        //redux-saga 写法
        const action = getInitList()
        store.dispatch(action);

    }

    handleOnChange = (e) => {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)
    };

    handleSearch = () => {
        const action = getAddItemAction();
        store.dispatch(action)
    };

    handleItemDelete = (index) => {
        const action = getDeleteItemAction(index);
        store.dispatch(action)
    };

    handleStoreChange = () => {
        this.setState(store.getState())
    }
}

export default App;
