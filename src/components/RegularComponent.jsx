import React, { Component } from 'react'

class RegularComponent extends Component {
    render() {
        console.log("Regular render")
        return (
            <div>
                Regular component {this.props.name}
            </div>
        )
    }
}

export default RegularComponent
