import React, { Component } from 'react'

class Filter extends Component {
    render() {
        return (
            <div>
                <input type="radio" name="filter" id="all" />
                <label htmlFor="all">All</label>
                <input type="radio" name="filter" id="pending" />
                <label htmlFor="pending">Pending</label>
                <input type="radio" name="filter" id="completed" />
                <label htmlFor="completed">Completed</label>
            </div>
        )
    }
}

export default Filter;