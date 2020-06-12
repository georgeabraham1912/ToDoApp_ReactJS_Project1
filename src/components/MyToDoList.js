import React, { Component } from "react";
import MyToDoListItem from "./MyToDoListItem"
import "./MyToDoList.css"
import todosData from "./todosData"

class MyToDoList extends Component{
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }    

    handleCheckboxChange(id) {        
        this.setState(prevState => {
            var newTodos = prevState.todos.map((prevTodo) => {
                if (prevTodo.id == id) {
                    // prevTodo.completed = !prevTodo.completed;
                    return {
                        ...prevTodo,
                        completed: !prevTodo.completed
                    }
                }
                return prevTodo;
            })
            return {
                todos: newTodos
            }
        }) 
        // alert("HI" + id);
    }

    render() {
        const todosCollection = this.state.todos.map(todoItems => <MyToDoListItem key={todoItems.id} content={todoItems} handleChange={this.handleCheckboxChange}/>);
        return (
            <div className="cltodo-list">
                {todosCollection}
            </div>
        );
    }
}

export default MyToDoList;