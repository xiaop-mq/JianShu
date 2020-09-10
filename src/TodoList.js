import React, { Component } from 'react'
import { getInputItemAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import store from './store'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'
 

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleChangeItem = this.handleChangeItem.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        store.subscribe(this.handleStoreChange, this.handleBtnClick) // 发布订阅者模式
    }
    render() { 
        return ( 
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <Input 
                    value={this.state.inputValue} 
                    placeholder="基本使用" 
                    style={{width: '300px', marginRight:'10px'}}
                    onChange={this.handleChangeItem}/>
                <Button onClick={this.handleBtnClick} type="primary">提交</Button>
                <List
                    style={{width:'320px', marginTop: '10px'}}
                    size="small"
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => <List.Item onClick={this.handleDeleteItem.bind(this, index)}>{item}</List.Item>}
                    />
            </div>
         );
    }
    handleChangeItem(e){
        const action = getInputItemAction(e.target.value);
        store.dispatch(action)
    }
    // 实现数据的联动
    handleStoreChange(){ 
        // 获取最新数据 在将最新数据进行更新
        this.setState(store.getState())
    }
    handleBtnClick(){
        const action = getAddItemAction();
        store.dispatch(action)
    }
    handleDeleteItem(index){
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }
}
 
export default TodoList;