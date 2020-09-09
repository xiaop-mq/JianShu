import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content !== this.props.state){
            return true
        } else {
            return false
        }
    }
    render() { 
        const { item } = this.props
        return ( 
            <div onClick={this.handleClick}>
                { item }
            </div>
         );
    }
    handleClick(){
        const { deleteItem, item } = this.props
        deleteItem(item)
    }
}
TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string , PropTypes.number]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

 
export default TodoItem;