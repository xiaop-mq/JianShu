import React, { Component } from 'react';
import store from './store'
import { connect } from 'react-redux'
import { Input, Button } from 'antd';

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.handleInputItem = this.handleInputItem.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
    }
    render() { 
        return ( 
            <div>
                <div>
                    <Input value={this.props.inputValue} onChange={this.handleInputItem}/>
                    <Button onClick={this.handleBtnClick}>提交</Button>
                </div>
                <ul>
                    <li>kiki</li>
                </ul>
            </div>
         );
    }
}
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}
// connect 让组件和store连接
export default connect(mapStateToProps, null)(TodoList);