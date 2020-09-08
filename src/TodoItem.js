import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() { 
        const { item, test } = this.props
        return ( 
            <div onClick={this.handleClick}>
                {test} - { item }
            </div>
         );
    }
    handleClick(){
        const { deleteItem, item } = this.props
        deleteItem(item)
    }
}
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
TodoItem.defaultProps = {
    test: 'hello world'
}
 
export default TodoItem;