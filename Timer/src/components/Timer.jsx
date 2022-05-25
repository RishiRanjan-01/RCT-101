import React, { useEffect,useState } from 'react'

const Timer = ({startTime,endTime}) => {
    const [timer, setTimer] = useState(startTime);
    const [timerId, setTimerId] = useState();
    const [flag, setflag] = useState(false)

    console.log(startTime,endTime)

    useEffect(()=>{
        let id = setInterval(()=>{
            setTimer(()=>timer+1)

        },1000)
        setTimerId(id);
        
        return (()=>{
            clearInterval(id)
        })
        

    },[timer])
    if(timer==endTime){
        clearInterval(timerId);
    }
    const reset = ()=>{
        clearInterval(timerId);
        setTimer(null);
        setTimerId(null);
        setflag(true)

    }
    
  return (flag  ? <div>Add Time Again <button onClick={()=>setflag(false)}>Again Start</button> </div> :
    <div>
        <h1>Timer</h1>
        <h1>{timer}</h1>
        <button onClick={reset}>Reset</button>
        
    </div>
  )
}

export default Timer