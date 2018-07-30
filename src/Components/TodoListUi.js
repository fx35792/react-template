import React, {Fragment} from 'react';
import {Input, List, Button, Card, Row, Col} from 'antd';

const responseInput = {
    lg: 22,
    md: 21,
    sm: 20,
    xs: 24,
    style: {
        marginBottom: '10px'
    }
};
const responseButton = {
    lg: 2,
    md: 3,
    sm: 4,
    xs: 24
};

//无状态组件
const TodoListUi = (props) => {
    return (
        <Fragment>
            <Card title='搜索'>
                <Row gutter={48}>
                    <Col {...responseInput}>
                        <Input placeholder="请输入" value={props.inputValue} onChange={props.handleOnChange}/>
                    </Col>
                    <Col {...responseButton}>
                        <Button type="primary" onClick={props.handleSearch}>Add</Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <List
                            bordered
                            dataSource={props.list}
                            renderItem={(item, index) => (<List.Item key={index} onClick={() => {
                                props.handleItemDelete(index)
                            }}>{item}</List.Item>)}
                        />
                    </Col>
                </Row>
            </Card>
        </Fragment>
    );
};

//一般组件
// class TodoListUi extends Component {
//     render() {
//         const {inputValue,list} = this.props;
//         return (
//             <Fragment>
//                 <Card title='搜索'>
//                     <Row gutter={48}>
//                         <Col {...responseInput}>
//                             <Input placeholder="请输入" value={inputValue} onChange={this.props.handleOnChange}/>
//                         </Col>
//                         <Col {...responseButton}>
//                             <Button type="primary" onClick={this.props.handleSearch}>搜索</Button>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col span={24}>
//                             <List
//                                 bordered
//                                 dataSource={list}
//                                 renderItem={(item, index) => (<List.Item key={index} onClick={()=>{this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//                             />
//                         </Col>
//                     </Row>
//                 </Card>
//             </Fragment>
//         );
//     }
// }

export default TodoListUi;
