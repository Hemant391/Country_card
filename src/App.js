import Countries from "./Country";
import React, { useState } from 'react'
import './app.css'
function App() {
  const [name,setName]=useState('')
 
  const handlesearch=(e)=>{
    setName(e.target.value)
  }
  return (
    <div className="Container" >
      <div className="searchbar">
        <input type="text" value={name} onChange={handlesearch} style={{width:'50%',padding:'5px'}} placeholder="Search for countries.."/>
      </div>
      <Countries Countryname={name} />
    </div>
  );
}

export default App;
