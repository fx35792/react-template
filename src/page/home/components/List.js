import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ListWrapper, ListItem, ListInfo, LoadMore} from '../style';
import {actionCreators} from '../store';

class List extends PureComponent {
    render() {
        const {list, getMoreList, page} = this.props;
        return (
            <ListWrapper>
                {list.map((value, index) => (
                    <Link to={'/detail/' + value.get('id')} key={index}>
                        <ListItem>
                            <img
                                className="list-img"
                                src={value.get('imgUrl')}
                                alt=""/>
                            <ListInfo>
                                <h3 className="title">{value.get('title')}</h3>
                                <p className="desc">{value.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    </Link>
                ))}
                <LoadMore onClick={() => getMoreList(page)}>更多</LoadMore>
            </ListWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage']),
});

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page));
    }
});

export default connect(mapState, mapDispatch)(List);