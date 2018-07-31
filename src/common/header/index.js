import React, {Component} from 'react';
import {connect} from 'react-redux';
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
        const {focused, list, handleInputFocus, handleInputBlur,} = this.props;
        return (
            <WrapperHeader>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
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
                    <NavItem className="right">登录</NavItem>
                </Nav>
                <Addition>
                    <Button className="writing">
                        <i className="iconfont">&#xe62b;</i>
                        写文章
                    </Button>
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
        // focused: state.get('header').get('focused')//第二种写法
        // focused: state.header.get('focused')//没设置immutable的写法
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            // console.log(list);
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
            // console.log(page, totalPage);
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            // console.log(originAngle);

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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);