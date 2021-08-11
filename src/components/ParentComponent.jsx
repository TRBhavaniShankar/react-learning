import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Bhavani'
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Bhavani'
            })
        }, 2000)
    }

    render() {
        console.log("************parent render****************")
        return (
            <div>
                Parent component
                <RegularComponent name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponent
