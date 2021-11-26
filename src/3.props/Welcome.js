import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Name: {this.props.name} Skill: {this.props.skill}</h1>
            </div>
        )
    }
}

export default Welcome
