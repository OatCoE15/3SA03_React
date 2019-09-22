import React, { Component } from 'react'

export default class Content extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    addnum = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <button onClick={this.addnum}>num: {this.state.count}</button>
            </div>
        )
    }

}