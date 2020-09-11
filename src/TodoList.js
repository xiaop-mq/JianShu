import React from 'react';
import { connect } from 'react-redux'
import { Input, Button } from 'antd';


const TodoList = {
    render() { 
        const { inputValue, changeInputValue, handleBtnClick, list } = this.props
        return ( 
            <div>
                <div>
                    <Input value={inputValue} onChange={changeInputValue}/>
                    <Button onClick={handleBtnClick}>提交</Button>
                </div>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
         );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        },
        handleBtnClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        },
    }
}
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
// connect 让组件和store连接
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);