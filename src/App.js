import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store';
import Header from './common/header';
import Home from './page/home';
import Detail from './page/detail/loadable';
import Login from './page/login';
import Writer from './page/writer';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/detail/:id' exact component={Detail}></Route>
                        <Route path='/login' exact component={Login}></Route>
                        <Route path='/writer' exact component={Writer}></Route>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
