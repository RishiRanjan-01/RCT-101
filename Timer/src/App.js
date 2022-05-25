import React, {useState} from 'react';
import './App.css';
import Timer from './components/Timer';

function App() {
  const [initTime, setinitTime] = useState(0)
  const [endTime, setendTime] = useState(0)
  const [timing, setTiming] = useState({})
 
  const handleAdd = ()=>{
    let times ={
      start:+initTime,
      end:+endTime
    }
    setTiming(times)
  }
  console.log(timing.start,timing.end)
  return (
    <div className="App">
      <div className='inputDiv'>
        {/* <label>Start Time</label> */}
        <input type="text" onChange={(e)=>setinitTime(e.target.value)} placeholder='Start Time' />
        {/* <label>End Time</label> */}
        <input type="text" onChange={(e)=>setendTime(e.target.value)} placeholder='End Time' />
        <button onClick={handleAdd}>Start</button>
      </div>
      
      {timing.start && timing.end ? <Timer startTime={timing.start} endTime={timing.end}/>:<div>Add Times To run Timer</div>}
    </div>
  );
}

export default App;
