import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListWrapper, ListItem, ListInfo} from '../style';

class List extends Component {
    render() {
        const {list} = this.props;
        return (
            <ListWrapper>
                {list.map((value) => (
                    <ListItem key={value.get('id')}>
                        <img
                            className="list-img"
                            src={value.get('imgUrl')}
                            alt=""/>
                        <ListInfo>
                            <h3 className="title">{value.get('title')}</h3>
                            <p className="desc">{value.get('desc')}</p>
                        </ListInfo>
                    </ListItem>
                ))}

            </ListWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'articleList'])
    }
};

export default connect(mapState, null)(List);