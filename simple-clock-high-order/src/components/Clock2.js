import * as rc from 'react';

const clockIntervalMs=1000; //ms


const Clock2 = () => {
    const clockStyle={ backgroundColor:"ghostwhite"}
    const [currentTime,setTime]=rc.useState(null)
    const [currentClockInterval,setClockInterval]=rc.useState(null)

    let startClockHandler=null;
    let stopClockHandler=null;

    rc.useEffect(()=>{
        console.log(`Inside useEffect window clock=${currentClockInterval}`)
    });

    stopClockHandler=()=>{
        console.log(`inside stop handler click ${currentClockInterval}`)
        clearInterval(currentClockInterval)
        setClockInterval(null)
    }

    startClockHandler=()=>{
        console.log(`inside start handler click ${currentClockInterval}`)
        let windowClock=setInterval(timeCallBack,clockIntervalMs);
        setClockInterval(windowClock)
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
                <button onClick={stopClockHandler} disabled={currentClockInterval==null}>Stop clock</button>
                <button onClick={startClockHandler} disabled={currentClockInterval!=null}>Start clock</button>
            </div>
        </div>
    );
};

export default Clock2;