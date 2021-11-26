import React from 'react'

const heading = {
    fontSize:`72px`,
    color: `orange`
}

function InlineStyling() {
    return (
        <React.Fragment>
            <h1 style = {heading}>Inline Styling</h1>
        </React.Fragment>
    )
}

export default InlineStyling
