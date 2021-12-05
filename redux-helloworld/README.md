# Overview
to be done

# Installing typescript

## Install typescript
```
yarn add typescript
```

## Add tsconfig.json
Add this to the root of the project (along side package.json)

## Step 2
```
npm install --save @types/react

```

## Using typed styles with React
If you are declaring a custom style object to beautify some element, then using the following syntax dramatically improves code readability and syntax checking
```
import * as react from 'react';

const Navbar = () => {
    const navStyle:react.CSSProperties={
        'backgroundColor':'ghostwhite'
    }
    return (
        <div style={navStyle}>
            <h1>Manage customers page.</h1>
        </div>
    );
};

```

# Next steps
You added the Customer entity objects
You created the default state with 2 demo customers
The Particpant component was displaying the 2 customers
You implemented `subscribe` handler
## what next?
Implement "Add customer click"
