import React, { Component } from "react";
import { Todo } from "./Todo";
import 'materialize-css';
import { Col, Card } from 'react-materialize';

export interface TodoItemProps extends Todo {

}

export default class TodoItem extends Component<TodoItemProps> {

    render() {

        let description = "";

        if(this.props.description && this.props.description !== "") {

            description = this.props.description;
        }

        return (
            <Col m={4} s={12}>
                <Card title={this.props.title}>{description}</Card>
            </Col>
        )
    }
}