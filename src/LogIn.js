import React, { Component } from 'react'

export default class LogIn extends Component {

    state = {
        username: '',
        password: '',
    }

    updateInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    logIn = event => {
        event.preventDefault()

    }

    render() {
        return (
            <div className="login-container">
            <p className="login-question">Already a user? Log In!</p>
                <form className="login-form" onSubmit={this.logIn}>
                    <input 
                        value={this.state.username} 
                        name="username"
                        type="text" 
                        placeholder="username" 
                        onChange={this.updateInput}
                    />
                    <input 
                        value={this.state.password} 
                        name="password" 
                        type="password" 
                        placeholder="password"
                        onChange={this.updateInput}
                    />
                    <button type="submit">Log In</button>
                </form>
                <button className="logout-button">Log Out</button>
            </div>
        )
    }
}