import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'


class NewTodo extends Component {
    state = {
        content: ''
    };

    handleAddTodo = (e) => {
        e.preventDefault();
        const action = {
            type: 'ADD_TODO',
            payload: this.state.content
        }

        this.props.dispatch(action);
        this.setState({ content: '' })
    };

    handleNewTodoChange = (e) => {

        this.setState({ content: e.currentTarget.value });
    };

    render() {
        return (
            <div>
                <form className='newTodo'>
                    <input type='text'
                        placeholder='Add new task'
                        value={this.state.content}
                        onChange={this.handleNewTodoChange} 
                        className='task-input'/>
                    <button className='myButton' onClick={this.handleAddTodo}>Add</button>
                </form>
            </div>
        )
    }
}

export default connect()(NewTodo);
