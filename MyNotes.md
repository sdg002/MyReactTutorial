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



