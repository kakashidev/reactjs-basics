import React from 'react'

function FunctionClick(props) {

    function clickHandler(){
        console.log('button clicked')
    }

    return (
        <div>
            <button className = "btn btn-primary" onClick = {clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick

