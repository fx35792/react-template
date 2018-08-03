import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {actionCreators} from './store';
import {LoginWrapper, LoginBox, LoginInput, LoginButton} from './style';

class Login extends PureComponent {
    render() {
        const {login} = this.props;


        if (!login) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <LoginInput placeholder='手机号或者邮箱'
                                    innerRef={(input) => {
                                        this.account = input
                                    }}/>
                        <LoginInput placeholder='密码'
                                    innerRef={(input) => {
                                        this.password = input
                                    }}/>
                        <LoginButton
                            onClick={() => this.props.handleLogin(this.account, this.password)}>登录</LoginButton>
                    </LoginBox>
                </LoginWrapper>
            )

        } else {
            return (
                <Redirect to='/'></Redirect>
            )
        }

    }


}

const mapState = (state) => ({
    login: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
    handleLogin(accountItem, passwordItem) {
        dispatch(actionCreators.changeLogin(accountItem.value, passwordItem.value))
    }
});

export default connect(mapState, mapDispatch)(Login);