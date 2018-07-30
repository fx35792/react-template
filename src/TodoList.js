import React, {Fragment} from 'react';
import {connect} from 'react-redux';

//无状态组件
const TodoList = (props) => {
    const {inputValue, list, handleInputChange, handleAdd, handleDelete} = props;
    return (
        <Fragment>
            <div>
                <input value={inputValue} onChange={handleInputChange}/>
                <button onClick={handleAdd}>add</button>
            </div>
            <ul>
                {list.map((value, index) => (
                    <li key={index} onClick={() => handleDelete(index)}>{value}</li>
                ))}
            </ul>
        </Fragment>
    );
};

//ui组件
// class TodoList extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         // const {inputValue} = this.props;
//         return (
//             <Fragment>
//                 <div>
//                     <input value={this.props.inputValue} onChange={this.props.handleInputChange}/>
//                     <button onClick={this.props.handleAdd}>add</button>
//                 </div>
//                 <ul>
//                     {this.props.list.map((value, index) => (
//                         <li key={index} onClick={() => this.props.handleDelete(index)}>{value}</li>
//                     ))}
//                 </ul>
//             </Fragment>
//         );
//     }
// }

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            };
            dispatch(action);
        },
        handleAdd() {
            const action = {
                type: 'add_item',
            };
            dispatch(action);
        },
        handleDelete(index) {
            const action = {
                type: 'delete_item',
                index
            };
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
//connect 是将store和TodoList作为连接