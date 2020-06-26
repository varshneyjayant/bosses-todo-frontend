import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from '../AppContexts';

export interface SecureRouteProps {

    children: any;
    path: string;
    exact: boolean;
}

export default class SecureRoute extends Component<SecureRouteProps> {

    static contextType = UserContext;

    render() {

        return (
            <Route path={this.props.path} exact={this.props.exact}
                render={({location, match}) => 
                    this.context ? (
                        this.props.children
                    ) : (
                        <Redirect to={{ pathname: '/login'}} />
                    ) 
                }
            ></Route>
        )
    }
}