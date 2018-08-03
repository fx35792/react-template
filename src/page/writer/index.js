import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Writer extends PureComponent {
    render() {
        const {login} = this.props;
        if (login) {
            return (
                <div>wirte</div>
            )

        } else {
            return (
                <Redirect to='/login'/>
            )
        }
    }
}

const mapState = (state) => ({
    login: state.getIn(['login', 'login'])
});

export default connect(mapState, null)(Writer);