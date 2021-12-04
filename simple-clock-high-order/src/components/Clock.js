import * as rc from 'react';

const clockIntervalMs=1000; //ms

const Clock = () => {
    const [currentTime,setTime]=rc.useState(null)
    const [currentClockInterval,setClockInterval]=rc.useState(null)
    const [isClockEnabled,enableClock]=rc.useState(false)

    console.log(`inside clock component, current time is `)
    let startClockHandler=null;
    let stopClockHandler=null;

    const timeCallBack=()=>{
        let currentTime=new Date();
        console.log(`Inside time, time=${currentTime}`)
        setTime(currentTime)
    }

    rc.useEffect(()=>{
        /*
        if (currentTime == null){
            console.log("Setting the clock first time")
            setTime(new Date())
            let clockInterval=setInterval(timeCallBack,clockIntervalMs);
            console.log(`Got an interval object ${clockInterval}`)
            setClockInterval(clockInterval)
        }
        else{
            console.log("Clock is already set")
        } 
        */
       console.log(`Inside useEffect, ${isClockEnabled}`)
       if (!isClockEnabled)
       {
           console.log("Already enabled, quitting")
           return;
       }

       if (currentClockInterval!=null){
           console.log("Not setting a new clock")
           return;
       }

        let clockInterval=setInterval(timeCallBack,clockIntervalMs);
        console.log(`Created a new interval object ${clockInterval}`)
        setClockInterval(clockInterval)
    })


    stopClockHandler=()=>{
        console.log(`inside stop handler click ${currentClockInterval}`)
        clearInterval(currentClockInterval)
        enableClock(false)
        setClockInterval(null)
    }

    startClockHandler=()=>{
        console.log(`inside start handler click ${currentClockInterval}`)
        enableClock(true)
    }

    return (
        <div className="mypanel">
            <div className="titlebar">CLOCK1:This is a basic clock, see how we use useState to and useEffect</div>
           <div>
           My clock , current time is {currentTime?.toISOString()}
           </div>
           <button onClick={stopClockHandler} disabled={!isClockEnabled}>Stop clock</button>
           <button onClick={startClockHandler} disabled={isClockEnabled}>Start clock</button>
           

        </div>
    );
};

export default Clock;