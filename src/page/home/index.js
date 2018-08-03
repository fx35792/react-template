import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from "./style";

import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';

class Home extends PureComponent {
    handleBackTop() {
        window.scrollTo(0, 0)
    }

    render() {
        
        const {backVisible} = this.props;
        // console.log(backVisible);
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img"
                         src="https://upload.jianshu.io/admin_banners/web_images/4358/a52cb0d0ef97a08087a234f4e25702b2471d49a4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                         alt=""/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {backVisible ? <BackTop onClick={this.handleBackTop}>返回</BackTop> : null}
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollToShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollToShow)
    }
}

const mapState = (state) => ({
    backVisible: state.getIn(['home', 'backVisible'])
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollToShow() {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false));
        }

    }
});

export default connect(mapState, mapDispatch)(Home);