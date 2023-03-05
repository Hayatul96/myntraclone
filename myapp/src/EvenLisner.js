import React from 'react'
import './App.css';

function hellowFunction(){
    alert("hii mr Sazwan");
}

const EvenLisner = () => {

    // function hellowFunction(){
    //     alert("hii mr Sazwan");
    // }
  return (
    <div className='App'>
      <input type="button" value="click" onClick={hellowFunction}/>
    </div>
  )
}

export default EvenLisner;

