import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : 'secondary'
    return (
        <div>
            <h1 className={`${className} font-xl`}>stylesheets</h1>
        </div>
    )
}

export default Stylesheet
