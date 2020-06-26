import React, { Component, ChangeEvent, KeyboardEvent } from "react";
import HttpUtils, { HttpResponse } from "../utils/HttpUtils";
import { Button } from "react-materialize";
import {createBrowserHistory} from 'history';

interface LoginPanelState {

    email: string;
    password: string;
}

export default class LoginPanel extends Component<{}, LoginPanelState> {

    constructor(props: {}) {

        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    handleInputChange(event: ChangeEvent<HTMLInputElement>) {

        const target = event.target.name;
        const value = event.target.value;

        if(target === "email") {
            this.setState({
                email: value
            });
        }
        else {

            this.setState({
                password: value
            });
        }
    }



    handleKeyInput(event: KeyboardEvent<HTMLDivElement>) {

        if(event.keyCode === 13) {

            this.loginUser();
        }
    }

    async loginUser() {

        const userName = this.state.email;
        const password = this.state.password;

        try{

            //let us make a call to server

            const response: HttpResponse = await HttpUtils.post('/security/login', {
                email: userName,
                password: password
            })

            //lets get the auth-token header
            if(response.status === 200 && 
                response.data.payload === "Login Success") {

                const loginHistory = createBrowserHistory({ forceRefresh: true});

                //reload page
                loginHistory.replace('/app');
            }
            else{
                throw new Error("Login Failed");
            }
        }
        catch(err) {

            console.error(err);
        }
    }

    render() {
        return (
            <div onKeyPress={(e) => this.handleKeyInput(e)}>
                <div>
                    <label>Email id:</label>
                    <input value={this.state.email} name="email" onChange={(e) => this.handleInputChange(e) } type="text"  />
                </div>
                <div>
                    <label>Password:</label>
                    <input value={this.state.password} name="password" onChange={(e) => this.handleInputChange(e) } type="password" />
                </div>
                <Button onClick={() => this.loginUser()}>Login</Button>
            </div>
        )
    }
}