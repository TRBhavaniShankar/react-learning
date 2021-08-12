import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)

        // provieds access
        this.inputRefs = React.createRef()

        // call back ref
        this.cbref = null

        // function
        this.setCbRef = (element) => {
            this.cbref = element
        }
        
    }
    
    componentDidMount(){

        if(this.cbref !== null){
            this.cbref.focus()
        }

        // this.inputRefs.current.focus()
        // console.log(this.inputRefs)
    }

    clickHandler = () => {
        alert(this.inputRefs.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRefs}/>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
