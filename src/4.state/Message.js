import React, { Component } from 'react'

export class Message extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Dev',
             message: 'Welcome Dev'
    
        }
    }
    
    subscribe(){
        this.setState({
            name: 'Ved',
            message: 'Thank You'
        })
    }
    render() {
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <h2>Msg: {this.state.message}</h2>
                <button className = "btn btn-primary" onClick = {()=>this.subscribe()}>Sub</button>
            </div>
        )
    }
}

export default Message
