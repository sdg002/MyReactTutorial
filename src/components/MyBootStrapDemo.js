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
            newItemText:""
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
    createNewTodo=()=>
    {
        console.log("Add new item");
    }
    render() {
        return (

            <div> 
                <h4 
                    className="bg-primary text-white text-center p-2"> {this.state.userName}'s' To Do List </h4>
                <div className="container-fluid">
                    <form className="form-inline">
                        <label for="newText">New item:</label>
                        <input 
                            id="newText"
                            className="form-control" 
                            value={this.state.newItemText} onChange={this.updateNewTextValue}></input>

                        <button type="button"
                            className="btn btn-primary"  onClick={this.createNewTodo}>Add</button>

                        <button type="button"
                            className="btn btn-secondary" 
                            onClick={this.changeStateData}
                            >Change</button>

                    </form>
                    <div className="my-1">
                    </div>
                    

                </div>
            </div>
        );
    }
}

export default MyBootStrapDemo
