import React, { Component } from "react"
import "./MyToDoListItem.css"

class MyToDoListItem extends Component {
    render() {
        const styles = {};
        styles.defaultChecked = this.props.content.completed;
        styles.color = this.props.content.completed ? "green" : "blue";
        styles.textDecoration = this.props.content.completed ? "line-through" : "none";
        
        return (
            // <div className="cltodo-item">
            //     <input type="checkbox" defaultChecked={props.content.completed ? true : false}/>
            //     <p style={{color: props.content.completed ? "green" : "red", font}}>{props.content.text}</p>
            // </div>
            <div className="cltodo-item">
                <input type="checkbox" checked={styles.defaultChecked} onChange={() => {console.log("Checkbox clicked!")}}/>
                <p style={styles}>{this.props.content.text}</p>
            </div>
        )
    }
}

export default MyToDoListItem