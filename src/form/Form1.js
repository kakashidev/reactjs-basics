import React, { Component } from 'react'

class Form1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             country: '',
             gender:'',
             isAdmin: false
        }
    }

    getFormData(event){
        event.preventDefault()
        console.log(this.state.username)
        console.log(this.state.comments)
        console.log(this.state.country)
        console.log(this.state.gender)
        console.log(this.state.isAdmin)



    }

    // getUsername(event){
    //     this.setState({username: event.target.value})
    // }

    // getComments(event){
    //     this.setState({
    //         comments: event.target.value
    //     })
    // }

    // getCountry(event){
    //     this.setState({
    //         country: event.target.value
    //     })
    // }
    // getGender(event){
    //     this.setState({
    //         gender: event.target.value
    //     })
    // }
    // getAdmin(event){
    //     this.setState({
    //         isAdmin: !this.state.isAdmin
    //     })
    // }
    
    render() {
        return (
            <div>
                <h1>Fill this form!</h1>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className = "form-control w-20" value = {this.state.username} onChange = {(event) => this.setState({username: event.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label>Comment</label>
                        <textarea type="text" className = "form-control w-20" value = {this.state.comments} onChange = {(event) => this.setState({comments: event.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label>Country</label>
                        <select className="form-select" value = {this.state.country} onChange = {(event) => this.setState({country: event.target.value})}>
                            <option value="">Select</option>
                            <option value="1">India</option>
                            <option value="2">Sri Lanka</option>
                            <option value="3">Mexico</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <input type="radio" className = "form-check-input"
                        value = '0' onChange={(event) => this.setState({gender: event.target.value})} name = "gender"/>&nbsp;&nbsp;Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <input type="radio" className = "form-check-input"
                        value = '1' onChange={(event) => this.setState({gender: event.target.value})}
                        name = "gender"/>&nbsp;&nbsp;Female
                    </div>


                    <div className="form-group">
                        <label>is Admin</label>
                        <input type="checkbox" className = "form-check-input"
                        value = {this.stateisAdmin} onChange={(event) => this.setState({
                            isAdmin: !this.state.isAdmin
                        })}/>
                    </div>

                    

                    <div>
                        <button className = "btn btn-primary" onClick = {(event) => this.getFormData(event)}>Get Data</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form1

