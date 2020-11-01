import React, { Component } from 'react';

class MyBootStrapDemo extends Component {
    constructor(props)
    {
        super(props)
        this.state=
        {
            userName:"Adam",
            todoItems:this.createStaticToDoItems(),
            newItemText:""
        }
    }
    changeStateData=()=>
    {
        console.log("click")
        this.setState({
            userName:this.state.userName === "Adam"? "Bob":"Adam",
            newItemText:"",
        })
    }
    updateNewTextValue = (event)=>
    {
        console.log("Updated new text value")
        this.setState({newItemText:event.target.value});
    }
    createStaticToDoItems()
    {
        var items=[]
        items.push({action:"Buy flowers", done:false});
        items.push({action:"Get shoes", done:false});
        items.push({action:"Collect tickets", done:true});
        items.push({action:"Call Joe", done:false});
        return items;
    }
    pendingTodoItems=()=>
    {
        console.log("Pending todo items");
        var allItems=this.state.todoItems;
        var pendingItems=allItems.filter(t=>t.done);
        return pendingItems;
    }
    OnCreateNewTodoClick=()=>
    {
        console.log("Add new item");
        if (!this.state.newItemText)
        {
            return;
        }
        var allItems=this.state.todoItems;
        var existingItem=allItems.find(item=>item.action == this.state.newItemText);
        if (existingItem!=null)
        {
            return;
        }
        var newItem={action:this.state.newItemText,done:false};
        allItems.push(newItem);
        this.setState({todoItems:allItems});
        this.setState({newItemText:""});
    }
    OnNewItemSubmit=(event)=>
    {
        console.log("OnNewItemSubmit");
        this.OnCreateNewTodoClick();
        event.preventDefault();
    }
    OnDeleteClick=(todo)=>{
        console.log(`Click on button ${todo.action} `)
    }
    todoTableRows=()=>
    {
        var allItems=this.state.todoItems;
        var tableRows=allItems.map(item=>
            <tr key={item.action}>
                <td>{item.action}</td>
                <td>
                    <input type="checkbox" 
                    checked={item.done} 
                    onChange={()=>this.toggleTodo(item)}></input>
                </td>
                <td>
                    <button className="btn btn-danger btn-sm" onClick={()=>this.OnDeleteClick(item)}>Delete</button>
                </td>
            </tr>
            );
        return tableRows;
    }
    
    toggleTodo=(todo)=>
    {
        console.log(`toggleTodo checkeditem=${todo.action}`);
        var allItems=this.state.todoItems;
        var existingItem=allItems.find(item=>item.action == todo.action);
        if (existingItem==null)
        {
            return;
        }
        var newDone = !existingItem.done;
        existingItem.done=newDone
        this.setState({todoItems:allItems})

    }

    render() {
        return (

            <div> 
                <h4 
                    className="bg-primary text-white text-center"> 
                        {this.state.userName}'s' To Do List &nbsp;&nbsp; {this.pendingTodoItems().length} items to do
                </h4>
                <div className="container-fluid">
                    <form className="form-inline" onSubmit={this.OnNewItemSubmit}>
                        <label htmlFor="newText">New item:</label>
                        <input 
                            id="newText"
                            className="form-control" 
                            value={this.state.newItemText} onChange={this.updateNewTextValue}></input>

                        <button type="button"
                            className="btn btn-primary m-1"  onClick={this.OnCreateNewTodoClick}>Add</button>

                        <button type="button"
                            className="btn btn-secondary  m-1" 
                            onClick={this.changeStateData}
                            >Change</button>

                        <label>Display {this.state.todoItems.length} items</label>

                    </form>

                    <table className="table table-striped table=bordered">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Done</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.todoTableRows()}
                        </tbody>
                    </table>                    

                </div>
            </div>
        );
    }
}

export default MyBootStrapDemo
