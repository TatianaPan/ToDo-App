import React, { Component } from 'react';
import {connect} from 'react-redux';

import {changeFilterValue} from '../../store/actions';
import './index.css'

class Filter extends Component {


    handleChangeFilter = (e) => {
        this.props.dispatch(changeFilterValue(e.currentTarget.value))
    }

    render() {
        return (
            <div className='filter-wrapper'>
                <div className='filter-text'>SHOW</div>
                <input type="radio" 
                name="filter" 
                id="all" 
                value='all'
                checked={ this.props.filter === 'all' } 
                onChange={this.handleChangeFilter}/>
                <label htmlFor="all" className='filter-text'>ALL</label>

                <input type="radio" 
                name="filter" 
                id="pending"
                value='pending' 
                checked={ this.props.filter === 'pending' } 
                onChange={this.handleChangeFilter}/>
                <label htmlFor="pending" className='filter-text'>PENDING</label>

                <input type="radio" 
                name="filter" 
                id="completed" 
                value='completed'
                checked={ this.props.filter === 'completed' }
                onChange={this.handleChangeFilter}/>
                <label htmlFor="completed" className='filter-text'>COMPLETED</label>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        filter: state.todoReducer.filter
    }
}

export default connect(mapStateToProps)(Filter);