import React, { useState,useEffect } from 'react'
    function Carddetail({name,image,alt}){
        return(<div className='card' style={{width:'200px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', width:"190px",border:'1px solid black',
        padding:'3px',margin:'10px 5px',height:'150px'
    }}>
        <img style={{height:'80%'}} src={image} alt={alt} />
        <h2 style={{height:'20%'}}>{name}</h2>
    </div>)
    }

export default function Country(){
    let url=''
    let arrdata=[1,2,3,4,5,6,7,8,9];
    const [cont_data,setCont_data]=useState([]);
    const fetchdata=async ()=>{
        try{
            let response
        }catch(e){
            console.log(e)
        }
    }
    
    return (
        <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',height:'11vh'}}>

            {arrdata.map((value)=>(<Carddetail key={value} name={cont_data} image={cont_data} alt={cont_data} />))}
        </div>
    )
}