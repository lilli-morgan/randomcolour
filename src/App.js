
import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [hex, setHex] = useState('#ffffff');
  const generateColor = () => {
      const randomColor = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
      setHex(`#${randomColor}`);
    };
  return (
    <div className="App" style={{backgroundColor:`${hex}`}}>
     <button onClick={generateColor}>Click</button>
    </div>
  );
}
export default App;
