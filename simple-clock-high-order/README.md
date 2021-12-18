# Getting Started
Some basic experiments. 
- A simple clock which ticks every 1 second
- High order component


# Simple Clock

![Simple clock!](images/simple_clock.png "Bootstrap experiments")

Demonstrates how we are using  `useState` hook and click handlers to create and destroy javascript clock


# High order component

![High order!](images/high_order.png "Bootstrap experiments")

Demonstrates how we can pass a click handler method via `props` from an outer component to the inner component. This is very useful to de-couple complexity and improve testability

# How to run?
```npm install```

```npm run start```


# What is the URL?
```
http://localhost:3000/MyReactTutorial123/static001/simple-clock-high-order/
```

# Why are we fudging the basename ?
We want to deploy this app to a sub-folder of a static web site. The web site is shared with multiple react apps

# How are we fudging the basename ?

```
  let frags=document.location.pathname.split('/')
  let basename=`/${frags[1]}/${frags[2]}/simple-clock-high-order`
  
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={ClockLayout()}>
        </Route>
      </Routes>
    </Router>
  );

```
The above makes it possible to use any intermediate sub-folders. Example:
```
http://localhost:3000/folder1/folder2/simple-clock-high-order/
```



