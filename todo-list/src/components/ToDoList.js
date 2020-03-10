import React from 'react';
import ToDo from './ToDo';

const ToDoList = props => {
    return(
        <div>
            <h2>Task Needed to be completed</h2>
            {props.toDoList.map( item => (
                <ToDo item={item} key={item.id} completedTask={props.completedTask}/>
            ))}
        </div>
    )
}

export default ToDoList;
