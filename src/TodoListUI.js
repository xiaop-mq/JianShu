import React from 'react';
import { Input, Button, List } from 'antd'

const TodoListUI = (props) =>{
    return ( 
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
            <Input 
                value={props.inputValue} 
                placeholder="基本使用" 
                style={{width: '300px', marginRight:'10px'}}
                onChange={props.handleChangeItem}/>
            <Button onClick={props.handleBtnClick} type="primary">提交</Button>
            <List
                style={{width:'320px', marginTop: '10px'}}
                size="small"
                bordered
                dataSource={props.list}
                renderItem={(item, index) => <List.Item onClick={() => {props.handleDeleteItem(index)}}>{item}</List.Item>}
                />
        </div>
     );
}

 
export default TodoListUI;