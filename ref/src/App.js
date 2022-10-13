import logo from './logo.svg';
import './App.css';
import * as React from 'react'

function App() {
  const timerRef = React.useRef(null)
  const divRef = React.useRef()
  const inputRef = React.useRef()

  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState('');
  const [textHeight, setTextHeight] = React.useState("auto");
  const [textWrapperHeight, setTextWrapperHeight] = React.useState("auto");

  React.useEffect(() =>{
    
    if (inputRef.current) {
      inputRef.current.focus()
    }

    setTextHeight(`${inputRef?.current?.scrollHeight}px`)

    return () => clearInterval(timerRef.current)
  },[text])
  
  const handleStart = () =>{
    if(timerRef.current) return;
    timerRef.current = setInterval(()=>{
      setCount((counter) => counter + 1)
    },1000);
    
  }
  
  const handleStop = () =>{
    clearInterval(timerRef.current)
    timerRef.current = null;
  }
  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="App">
     <h1>Time: {count}s</h1> 
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <div style={{
          height: `${textWrapperHeight}`
        }} ref={divRef}>
        <textarea style={{
          height: `${textHeight}`,
          overflow:'hidden'
        }} placeholder='please input' onChange={onChange} ref={inputRef} value={text}></textarea>
      </div>
    </div>
  );
}

export default App;
