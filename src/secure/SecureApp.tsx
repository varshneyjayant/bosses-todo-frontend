import React, { Component } from "react";
import { Link, Switch, Router } from "react-router-dom";
import TodoList from "./todo/TodoList";
import { Row, Col } from "react-materialize";
import AddTodo from "./todo/AddTodo";
import SecureRoute from "../routes/SecureRoute";
import history from '../utils/HistoryUtils';


export interface SecureAppProps {

    location: any;
    match: any;
}

export default class SecureApp extends Component<SecureAppProps> {

    

    render() {

        return (
            
            <Switch>
                <SecureRoute path={`/app/add`} exact  >
                    <AddTodo />
                </SecureRoute>
                <SecureRoute path={''} exact>
                    <Row>
                        <Col m={12}>
                            <Link to={'app/add'} style={{marginBottom:20}} className="btn">Add Todo</Link>
                        </Col>
                    </Row>
                    <TodoList />
                </SecureRoute>
            </Switch>        
            
        );  
    }
}