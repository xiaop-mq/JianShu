import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import Test from './Test';
import './style.scss'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state={
            inputValue: '',
            list:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.inputBtnClick = this.inputBtnClick.bind(this)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
    }
    render() { 
        return ( 
            <Fragment>
                {/*代码注释*/}
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                      id="insertArea"
                      className="input"
                       value={this.state.inputValue}
                       onChange={this.handleInputChange}
                       />
                    <button onClick={this.inputBtnClick}>提交</button>
                </div>
                <ul>
                   { this.getTodoItem() }
                </ul>
                <Test content={this.state.inputValue}/>
            </Fragment>
         );
    }
    getTodoItem(){
       return this.state.list.map((item, index)=>{
            return (
            <div key={item}>
                <TodoItem item={item} index={index} deleteItem={this.handleDeleteItem}/>
            </div>
            )
        })
    }
    handleInputChange(e){
        const value = e.target.value
        this.setState(()=>({
            inputValue: value
        }))
    }
    inputBtnClick(){
        this.setState((prevState) => ({
            list:[...prevState.list, prevState.inputValue],
            inputValue:''
        }))
    }
    handleDeleteItem(index){
        this.setState((prevState) =>{
            const list = [...prevState.list]
            list.splice(index, 1)
            return { list }
        })  
    }
}
 
export default TodoList;