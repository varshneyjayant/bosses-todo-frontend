import React,{ Component } from "react";
import TodoItem, { TodoItemProps } from "./TodoItem";
import HttpUtils, { HttpResponse } from "../../utils/HttpUtils";
import { Row,  Col } from "react-materialize";

export interface TodoListProps {

}

interface TodoListState {

    todos: TodoItemProps[]
}

export default class TodoList extends Component<TodoListProps, TodoListState> {

    constructor(props: TodoListProps){
        super(props);

        this.state = {
            todos: []
        }
    }

    async componentDidMount() {

        try{

            //let us make a call to the server to get the list
            const response: HttpResponse = await HttpUtils.get('/secure/todo');

            this.setState({
                todos: response.data.payload
            });
        }
        catch(err) {

            console.log(err);
        }
        
    }

    render() {

        if(this.state.todos.length === 0) {

            return (
                <Row>
                    <Col m={12}>
                    <div>Loading Todos..</div>
                    </Col>
                </Row>   
            )
        }
        else{

            return(
                <Row>
                    <Col m={12}>
                        <Row>
                            { this.state.todos.map(todo => <TodoItem key={todo.todoId} {...todo} />) }
                        </Row>
                    </Col>
                </Row>
                
            )
        }
    }
}