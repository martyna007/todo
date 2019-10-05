// this is the container component

import React, { Component } from 'react'

class AddTask extends Component {
    state = {
        content: '',
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({
            content: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="content">Add new todo:</label>
                    <input type="text" id="content" onChange={this.handleChange} value={this.state.content}/>
                    <button className="btn waves-effect waves-light" disabled={!this.state.content}>Submit <i className="material-icons right">add</i></button>
                </form>
            </div>
        )
    }
}
export default AddTask