import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
    DetailWrapper,
    Header,
    DetailContent
} from './style';

import {actionCreators} from './store';

class Detail extends PureComponent {
    render() {
        const {title, content} = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <DetailContent dangerouslySetInnerHTML={{__html: content}}/>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
    };
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetailData(id))
    }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));