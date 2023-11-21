import { useState } from 'react';
import './App.css';


function App() {  
const [num1,setNum1]=useState("")
const [num2,setNum2]=useState("")
const [netice,setNetice]=useState(0)

const handleTopla=(e)=>{
  e.preventDefault()
if(num1 && num2){
  let data=parseInt(num1)+parseInt(num2)
  setNetice(data)
}
}
const handleCix=(e)=>{
  e.preventDefault()
  if(num1 && num2){
    let data=parseInt(num1) - parseInt(num2)
    setNetice(data)
  }
}
const handleVur=(e)=>{
  e.preventDefault()
  if (num1 && num2){
    let data=parseInt(num1) * parseInt(num2)
    setNetice(data)
  }
}
const handleBol=(e)=>{
  e.preventDefault()
  if(num1 && num2){
    let data = parseInt(num1) / parseInt(num2)
    setNetice(data)
  }
}
  return (
    

    <div className='App'>

    <header className='App-header'>
      <h1>Birinci Ədədi Daxil edin</h1>
   
        <input type="text" className='num1' onChange={(e)=>setNum1(e.target.value)}/>
        
      
      <h2>Ikinci Ədədi Daxil edin</h2>
      
        <input type="text" className='num2' onChange={(e)=>setNum2(e.target.value)}/>
        
    
      <form>
        <h1>Nəticə</h1>
        <input type="text" className='netice' value={netice}></input>
        <button className='toplama' onClick={handleTopla}>Topla</button>
        <button className='cixma' onClick={handleCix}>Cix</button>
        <button className='vurma' onClick={handleVur}>Vur</button>
        <button className='bolme' onClick={handleBol}>Bol</button>
      </form>

    </header>
    </div>

     
  );
}

export default App;
