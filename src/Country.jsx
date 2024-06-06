import React, { useState,useEffect } from 'react'
    function Carddetail({name,image,alt}){
        return(<div className='card' style={{width:'200px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', width:"190px",border:'1px solid black',
        padding:'10px',margin:'10px',height:'200px',borderRadius:'8px',
    }}>
        <img style={{width:'100%'}} src={image} alt={alt} />
        <h4 >{name}</h4>
    </div>)
    }

export default function Country(){
    let url='https://restcountries.com/v3.1/all'

    const [detail,setDetail]=useState([]);
    const fetchdata=async ()=>{
        try{
            let response=await fetch(url);
            let data= await response.json();
           
            setDetail(data);

        }catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        fetchdata();
    },[])
    
    return (
        <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',height:'100vh'}}>

            {detail.map((data)=>(<Carddetail key={data.name.common}  name={data.name.common} image={data.flags.png} alt={data.flags.alt} />))}
        </div>
    )
}