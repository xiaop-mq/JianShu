import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];  

class App extends Component {
    render() { 
        return ( 
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <Input placeholder="基本使用" style={{width: '300px', marginRight:'10px'}}/>
                <Button type="primary">提交</Button>
                <List
                    style={{width:'320px', marginTop: '10px'}}
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                    />
            </div>
         );
    }
}
 
export default App;