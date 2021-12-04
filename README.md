# Overview
This is a project which represents my learning and experiments with React


# BootstrapExperiments
[BootstrapExperiments](/BootStrapExperiments)
![Bootstrap experiments!](images/bootstrapexperiments.png "Bootstrap experiments")


# Simple Clock and high order components

[Simple clock and high order componetns](/simple-clock-high-order)

![Simple clock!](images/simple_clock.png "Bootstrap experiments")

# How to do a one-time initialization in your component?
Read this StackOverFlow post
https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once

You are passing an `useEffect` handler with an empty array.

```
    const onloadHandler=()=>{
        console.log("CLOCK2: onLoadHandler")
    }
    rc.useEffect(onloadHandler,[]);

```