import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Bhavani',
        }

        console.log("LifeCycleA constructor")
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleA getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifeCycleA name: " + this.state.name)
        console.log("LifeCycleA componentDidMount")
        
        // // is an async operation
        // this.setState({
        //     name: 'shankar'
        // })

        // // will give the same reulst -- will not update the name already
        // console.log("LifeCycleA name: " + this.state.name)
    }


    shouldComponentUpdate(){
        console.log("LifeCycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate")
        
    }

    handleChangeState = () =>{
        this.setState({
            name: 'shankar'
        })
    }

    render() {
        console.log("LifeCycleA render")
        console.log("LifeCycleA render name: " + this.state.name)
        return (
            <div>
                LifecycleA 
                <button onClick={this.handleChangeState}>change state</button>
                <LifecycleB />
                <h1>{this.state.name}</h1>
            </div>
        )
    }

}

export default LifecycleA
