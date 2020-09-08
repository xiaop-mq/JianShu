import React, { Component } from 'react';

// 当父组件render函数被运行时，它的子组件的render函数都将被重新运行。
class Test extends Component {
    render() { 
        return ( 
        <div>{this.props.content}</div>
         );
    }
}
 
export default Test;
