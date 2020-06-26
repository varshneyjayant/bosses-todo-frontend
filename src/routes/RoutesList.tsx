import React, { Component } from "react";
import RouteEntry from "./RouteEntry";
import { Switch, Route } from "react-router-dom";
import SecureRoute from "./SecureRoute";

export interface RoutesListProps {

    routes: RouteEntry[];
}

export default class RoutesList extends Component<RoutesListProps> {

    render() {

        return(

            <Switch>
                {this.props.routes.map((route, i) => (
                route.secureRoute ? (
                    <SecureRoute key={i} path={route.path} exact={route.exact}>
                        <route.component />
                    </SecureRoute>
                    ): (
                    <Route key={i} path={route.path} exact={route.exact} component={route.component} />
                )))
            }
            </Switch>
        )
    }
}