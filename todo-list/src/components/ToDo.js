import React from 'react';
import './todo.css';

const ToDo = props => {
    return(
        <div onClick={() => props.completedTask(props.item.id)} className={`item${props.item.completed ? 'completed' : '' }`}>
            <h2>{props.item.task}</h2>
        </div>
    )
}
export default ToDo;

