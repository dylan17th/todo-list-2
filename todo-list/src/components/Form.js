import React from 'react';

class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            task: ''
        }
    }
inputHandler = e => {
    this.setState({task: e.target.value})
}
submitHandler = e => {
    e.preventDefault();
    this.props.addItem(this.state.task);
    this.setState({
        task: ''
      })
}

    
    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <input type='text' name='task' onChange={this.inputHandler} value={this.state.task}/>
                <button>Add Task</button>
                <button onClick={this.props.clearCompleted}>Delete Completed Task</button>
            </form>
        )
    }
}

export default Form;