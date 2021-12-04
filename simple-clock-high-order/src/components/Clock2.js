import * as rc from 'react';

const clockIntervalMs=1000; //ms


const Clock2 = () => {
    const clockStyle={ backgroundColor:"ghostwhite"}
    const [currentTime,setTime]=rc.useState(null)
    const [isInitialized,setIsInitialized]=rc.useState(false)
    const [javascriptClockIntervalObject,setJavascriptClockIntervalObject]=rc.useState(null)

    let startClockHandler=null;
    let stopClockHandler=null;

    rc.useEffect(()=>{
        console.log(`CLOCK2:Inside dummy useEffect window clock=${javascriptClockIntervalObject}`)
    });

    const onloadHandler=()=>{
        console.log("CLOCK2: onLoadHandler");
        startClockHandler();
    }
    rc.useEffect(onloadHandler,[]);
    //https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once


    stopClockHandler=()=>{
        console.log(`CLOCK2:inside stop handler click ${javascriptClockIntervalObject}`)
        clearInterval(javascriptClockIntervalObject)
        setJavascriptClockIntervalObject(null)
    }

    startClockHandler=()=>{
        console.log(`CLOCK2:inside start handler click ${javascriptClockIntervalObject}`)
        let windowClock=setInterval(timeCallBack,clockIntervalMs);
        setJavascriptClockIntervalObject(windowClock)
    }

    const timeCallBack=()=>{
        let currentTime=new Date();
        console.log(`Inside windows timer call back, time=${currentTime}`)
        setTime(currentTime)
    }


    return (
        <div style={clockStyle} className="mypanel">
            <div className="titlebar">CLOCK2:This is a simpler implementation. We are only using the state to store for storing the setInterval</div>
            <div>
                New clock, current time is <strong>{currentTime?.toISOString()}</strong>
            </div>
            <div>
                <button onClick={stopClockHandler} disabled={javascriptClockIntervalObject==null}>Stop clock</button>
                <button onClick={startClockHandler} disabled={javascriptClockIntervalObject!=null}>Start clock</button>
            </div>
        </div>
    );
};

export default Clock2;