import React, { Component } from 'react'
import TodoListUI from './TodoListUI'
import { getInputItemAction, getAddItemAction, getDeleteItemAction, getInitList } from './store/actionCreators'
import store from './store'
import 'antd/dist/antd.css';
 

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleChangeItem = this.handleChangeItem.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
        store.subscribe(this.handleStoreChange, this.handleBtnClick) // 发布订阅者模式
    }
    render() { 
        return ( 
            <TodoListUI 
                list={this.state.list}
                inputValue={this.state.inputValue}
                handleChangeItem={this.handleChangeItem}
                handleBtnClick={this.handleBtnClick}
                handleDeleteItem={this.handleDeleteItem}
            />
         );
    }
    componentDidMount(){
        const action = getInitList()
        store.dispatch(action)
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