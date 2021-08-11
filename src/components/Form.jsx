import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        // single source of truth
        this.state = {
             username: '',
             comments: '',
             topic: 'React',
        }
    }
    
    // listner
    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) =>{
        this.setState({
            comments: event.target.value
        })
    }
    

    handleTopicChange = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        // 
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User name</label>
                    <input type="text" value={this.state.username} onChange={this.handleUserNameChange}/>
                </div>
                <div>
                    <label htmlFor="">Comments</label>
                    <textarea 
                     cols="30" rows="10" 
                    value={this.state.comments} 
                    onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
