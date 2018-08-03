import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import {
    WrapperHeader,
    Nav,
    Logo,
    NavItem,
    NavSearch,
    SearchWrapper,
    SearchInfo,
    SearchTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    Addition,
    Button
} from './style';

import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../page/login/store';

class Header extends Component {
    getListArea = () => {

        const {focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;

        const newList = list.toJS();
        const pageList = [];
        if (newList && newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }


        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => this.spinIcon = icon} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInfo>
            )
        } else {
            return null
        }
    };

    render() {
        const {focused, list, handleInputFocus, handleInputBlur, login} = this.props;
        return (
            <WrapperHeader>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <Link to='/'>
                        <NavItem className="left active">首页</NavItem>
                    </Link>
                    <NavItem className="left">下载App</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}/>
                        </CSSTransition>
                        <i className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe6dd;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                    <NavItem className="right">
                        <i className="iconfont Aa">&#xe636;</i>
                    </NavItem>

                    {login ? <NavItem onClick={this.props.handleLogout} className="right">退出</NavItem> :
                        <Link to='/login'>
                            <NavItem className="right">登录</NavItem>
                        </Link>
                    }
                </Nav>
                <Addition>
                    <Link to='/writer'>
                        <Button className="writing">
                            <i className="iconfont">&#xe62b;</i>
                            写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </WrapperHeader>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
        // focused: state.header.get('focused')//没设置immutable的写法
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.getInputFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.getInputBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.getMouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.getMouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');

            if (originAngle) {
                originAngle = parseInt(originAngle, 10)
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        },
        handleLogout() {
            dispatch(loginActionCreators.logout());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);