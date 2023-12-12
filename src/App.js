import './App.css';
import { useEffect } from 'react';
import { CursorAnim } from './Animations/CursorAnim';
import Main from './Components/Home/Main';

function App() {
  useEffect(()=>{
    CursorAnim()
  },[])
  return (
    <div className="App">
      <div className='cursor'></div>
      <Main />     
    </div>
  );
}

export default App;
