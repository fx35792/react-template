import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {RecommendWrapper, RecommendItem} from '../style';

class Recommend extends PureComponent {
    render() {
        const {list} = this.props;
        return (
            <RecommendWrapper>
                {list.map((value) => (
                    <RecommendItem imgUrl={value.get('imgUrl')} key={value.get('id')}/>
                ))}

            </RecommendWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
});

export default connect(mapState, null)(Recommend);