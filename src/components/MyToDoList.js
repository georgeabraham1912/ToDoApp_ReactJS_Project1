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
    }    

    render() {
        const todosCollection = this.state.todos.map(todoItems => <MyToDoListItem key={todoItems.id} content={todoItems}/>);
        return (
            <div className="cltodo-list">
                {todosCollection}
            </div>
        );
    }
}

export default MyToDoList;