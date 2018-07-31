import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    TopicWrapper,
    TopicItem
} from '../style';

class Topic extends Component {
    render() {
        const {list} = this.props;
        return (
            <TopicWrapper>
                {list.map((value) => (
                    <TopicItem key={value.get('id')}>
                        <img
                            className="top-item"
                            src={value.get('imgUrl')}
                            alt=""
                        />
                        {value.get('title')}
                    </TopicItem>
                ))}

            </TopicWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(['home', 'topicList'])
    }
};

export default connect(mapState, null)(Topic);