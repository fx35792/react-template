import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    DetailWrapper,
    Header,
    DetailContent
} from './style'

class Detail extends PureComponent {
    render() {
        const {content} = this.props;
        return (
            <DetailWrapper>
                <Header>姥姥进贾府11：为什么凤姐当着刘姥姥跟贾蓉调情？</Header>
                <DetailContent>
                    {content}
                </DetailContent>
            </DetailWrapper>
        )
    }

    componentDidMount() {

    };
}

const mapState = (state) => ({
    content: state.getIn(['detail', 'content'])
});

export default connect(mapState, null)(Detail);