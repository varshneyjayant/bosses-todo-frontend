import React, { Component, ChangeEvent } from "react";
import { Button, Row, Col, TextInput, Textarea } from "react-materialize";
import HttpUtils from "../../utils/HttpUtils";


export interface AddTodoProps {

}

export interface AddTodoState {

    title: string;
    description: string;
    confirmButtonLabel: string;
}

export default class AddTodo extends Component<AddTodoProps, AddTodoState> {

    constructor(props: AddTodoProps) {
        super(props);

        this.state = {
            description: "",
            title: "",
            confirmButtonLabel: "Confirm"
        };
    }

    onTextChange(event: ChangeEvent<HTMLInputElement>) {

        try{

            const target = event.target.id;
            const value = event.target.value;

            if(target === "add-todo-title" ) {

                this.setState({
                    title: value
                });
            }
            else{

                this.setState({
                    description: value
                });
            }
        }
        catch(err){
            console.log(err);
        }
        
    }

    componentWillMount() {

        console.log('component will mount');
    }

    async submitAddTodo() {

        const todoTitle = this.state.title;
        const todoDescription = this.state.description;

        this.setState({
            confirmButtonLabel: "Saving..."
        });

        //hide modal

        try{

            const response = await HttpUtils.post('/secure/todo', {
                title: todoTitle,
                description: todoDescription
            });

            if(response.status === 200 && response.data.payload){

                //updated, close 

                this.setState({
                    confirmButtonLabel: "Confirm"
                });

                //update the list
            }
        }
        catch(err) {

        }
        
    }

    render() {

        return (
            <Row>
                <Col>
                    <h3>Add Todo</h3>
                    <TextInput id="add-todo-title"  label="Todo Title" onChange={(e) => this.onTextChange(e)}></TextInput>
                    <Textarea id="add-todo-desc"  label="Todo Description" onChange={(e) => this.onTextChange(e)}></Textarea>
                    <Button  modal="confirm" onClick={()=> this.submitAddTodo()} node="button">Confirm</Button>
                </Col>
            </Row>
        )
    }
}