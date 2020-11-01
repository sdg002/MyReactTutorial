ReactJS Kindle
--------------
# Link to source code
https://github.com/Apress/pro-react-16


# Check the versions
node -v
v10.19.0


npm -v
6.13.4

npm -l
display full usage info

# How to list a specific package
```
npm ls create-react-app
```

# How to list a global package?
```
npm ls create-react-app -g
```

# What is NPX and what is NPM?
```
NPM installs a package
NPX executes a package
```


# Install create-react-app globally
```
npm install --global create-react-app
```

# Create a new React App
```
npx create-react-app todo
```

# How to run the basic app?
npm start 
//this will run the JS script in the start element of the package.json

# Install bootstrap?
Look up the latest version of bootstrap from NPM
```
cd todo 
npm install bootstrap@4.5.3
```

# Include Bootstrap in index.js
```
//import * as serviceWorker from './serviceWorker'; 
import 'bootstrap/dist/css/bootstrap.css';
```
# Change App.js to a Component
```
import SampleComponent from './components/SampleComponent'

class App extends Component
{
  render()
  {
  return (
    <div className='App'>
      <img src={logo} className="App-logo" alt="logo" />
      <div>This is a Class component in App.js</div>
      <SampleComponent></SampleComponent>
      <SampleComponent></SampleComponent>
    </div>
    );
  }
}

```

# Creating a custom component
Create a subfolder for all components
Create a new file SimpleComponent.js
```
import React, { Component } from 'react'

class SampleComponent extends Component
{
    render()
    {
        return <h1>This is my sample component</h1>
    }
}

export default  SampleComponent


```
You will need to reference this in App.js

# Using React.CreateElement inside custom component
```
class SampleComponentCreateElement extends Component
{
    render()
    {
        return React.createElement(
            "div",
            {"id":"id001"}, 
            React.createElement(
                "h1",
                null,
                "This is a h1 and was injected using CreateElement"
            )
            );        
    }
}

```
You will need to reference this in App.js

# Component which accepts props
```
class SampleWithProps extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return <div>
            This is my <strong>sample</strong>  component with 
            props.FirstName:<strong>{this.props.firstName}</strong>  and LastName:<strong>{this.props.lastName}</strong> </div>
    }
}

```

App.js
```
      <SampleWithProps firstName="John" lastName="Doe"></SampleWithProps>
      <SampleWithProps firstName="Jane" lastName="Doe"></SampleWithProps>

```

# Handle events within a component
```
class ClickCounter extends Component
{
    constructor(props)
    {
        super(props)
        this.state={counter:0};
        this.onIncrementClickHandler=this.onIncrementClickHandler.bind(this);
        this.onDecrementClickHandler=this.onDecrementClickHandler.bind(this);
    }
    onIncrementClickHandler()
    {
        console.log("got a click event- increment");
        let newCounter=this.state.counter+1;
        this.setState({counter:newCounter});
    }
    onDecrementClickHandler()
    {
        console.log("got a click event - decrement");
        let newCounter=this.state.counter-1;
        this.setState({counter:newCounter});
    }
    render()
    {
    const outerBoder={
        'border-color':'blue', 
        'color':'red', 'border-width':'1', 
        'border-style':'solid', 
        'background-color':'yellow'
    };
    return <div style={outerBoder}>
        You have clicked <strong>{this.state.counter}</strong> times
        <button onClick={this.onIncrementClickHandler}>Increment. </button>;
        <button onClick={this.onDecrementClickHandler}>Decrement. </button>;
    </div>
    
    }
}

```
## Caveats about setting State
- You need to call `this.setState` to make a change
- Very much asynchronous
- You will have to remember to use call backs if you want to do something sequential after setting the state


# Routing using Router
## App.js
Notice that the Nav menu is within HashRouter element
```
  return( 
      <HashRouter>
        <ul>
          <li>
            <Link to="">Task list</Link>
          </li>
          <li>
            <Link to="modaldemo">Modal demo</Link>
          </li>
          <li>
            <Link to="datagriddemo">Datagrid demo</Link>
          </li>
        </ul>
        <hr />        

        <Switch>
          <Route path="/" exact>
            <MyBootStrapDemo></MyBootStrapDemo>
          </Route>
          <Route path="/tasklist">
            <MyBootStrapDemo></MyBootStrapDemo>
          </Route>
          <Route path="/modaldemo" >
            <MyModalDemo></MyModalDemo>
          </Route>
          <Route path="/datagriddemo" >
            <MyDataGrid></MyDataGrid>
          </Route>
        </Switch>                  
    </HashRouter>);    

```


# Routing using Router and Bootstrap NAV


## MyBootStrapNav component which uses BS 
- Notice the usage of Link element and not the A tag
- Notice we are not using hash symbol

```
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" to="/">My company</a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="tasklist">Task list</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"  to="modaldemo">Demo of modal</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="datagriddemo">Demo of data grid</Link>
                </li>
            </ul>
        </nav>

```
## App.js
```
  return( 
      <HashRouter>
        <MyBootStrapNav></MyBootStrapNav>
        <Switch>
          <Route path="/" exact>
            <MyBootStrapDemo></MyBootStrapDemo>
          </Route>
          <Route path="/tasklist">
            <MyBootStrapDemo></MyBootStrapDemo>
          </Route>
          <Route path="/modaldemo" >
            <MyModalDemo></MyModalDemo>
          </Route>
          <Route path="/datagriddemo" >
            <MyDataGrid></MyDataGrid>
          </Route>
        </Switch>                  
    </HashRouter>);    

```

# React Modal
## Declare state variables and control the open/close via setState
```
    OnShowModalClick=()=>
    {
        //alert("show me a modal")
        const existingState=this.state.isModalOpen;
        this.setState({
            isModalOpen:!existingState
        });
    }

```

## You will need to create a Modal element
```
    <Modal isOpen={this.state.isModalOpen}>
        <h3>Some modal dialog</h3>
        <p>contents of the modal</p>
        <button className="btn btn-sm btn-primary m-1" onClick={()=>this.OnOkClick(true)}>Ok</button>
        <button className="btn btn-sm btn-primary m-1" onClick={()=>this.OnOkClick(false)}>Cancel</button>
    </Modal>

```

## How to close the Modal
```
    OnModalCloseClick=(retval)=>
    {
        this.setState({
            isModalOpen:false
        });
        console.log(`Which button was click? Ok=${retval} Cancel=${!retval}`)

    }
```