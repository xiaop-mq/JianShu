import React, { Component, Fragment } from 'react';
import './style.css'
import { CSSTransition,TransitionGroup } from 'react-transition-group'
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
        this.handleAddItem = this.handleAddItem.bind(this)
    }
    render() { 
        return ( 
            <Fragment>
                <TransitionGroup>
                {
                    this.state.list.map((item, index) => {
                        return (
                            <CSSTransition
                            timeout={1000}
                            classNames='fade'
                            unmountOnExit
                            onEntered={(el)=>{el.style.color='pink'}}
                            appear={true}
                            key={index}
                        >
                            <div>{item}</div>
                            </CSSTransition>
                        )
                    })
                }
                <button onClick={this.handleAddItem}>toggle</button>
                </TransitionGroup>
            </Fragment>
         );
    }
    handleAddItem(){
        this.setState((prevState)=>{
            return {
                list: [...prevState.list, 'item']
            }
        })
    }
}
 
export default App;