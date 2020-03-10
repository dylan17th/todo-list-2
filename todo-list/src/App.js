import React from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      toDoList: []
    }
  }
  addItem = (input) => {
    const newItem = {
        task: input,
        id: Date.now(),
        completed: false
    }
    this.setState({
      toDoList: [...this.state.toDoList, newItem]
    })
}
completedTask = itemId => {
this.setState({
  toDoList: this.state.toDoList.map(item => {
    if(itemId === item.id){
      return {
        ...item, 
        completed: !item.completed
      }
    }else{ 
      return item
    }
  })
})
}
clearCompleted = () => {
this.setState({
  toDoList: this.state.toDoList.filter( item => {
    if (item.completed === true){
      return null
    }
    else{
      return item
    }
  })
})
}
  render(){
  return (
    <div className="App">
      <h1>List of Task</h1>
      <ToDoList toDoList={this.state.toDoList} completedTask={this.completedTask}/> 
      <Form addItem={this.addItem} clearCompleted={this.clearCompleted}/>
    </div>
  );
  }
}

export default App;
