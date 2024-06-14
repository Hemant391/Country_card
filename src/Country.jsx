import React, { useState,useEffect } from 'react'
    function Carddetail({name,image,alt}){
        return(<div className='countryCard' style={{width:'200px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', width:"190px",border:'1px solid black',
        padding:'10px',margin:'10px',height:'200px',borderRadius:'8px',
    }}>
        <img style={{width:'100%'}} src={image} alt={alt} />
        <h2 className='countryCard'>{name}</h2>
    </div>)
    }

export default function Country({Countryname}){
    const [filter,setFilter]=useState([])
   
    let url='https://restcountries.com/v3.1/all'

    const [detail,setDetail]=useState([]);
   
    const fetchdata=async ()=>{
        try{
            let response=await fetch(url);
            let data= await response.json();
            console.log(data)
            let filterdata=[]
            if(Countryname!=''){

          filterdata= data.filter((e)=>{
                   return( e.name.common.toLowerCase().includes(Countryname.toLowerCase()))
                })
                setDetail(filterdata);
            }else{

                setDetail(data);
            }

        }catch(e){
            console.log('Error: ',e);
        }
    }
    useEffect(()=>{
        console.log(Countryname)
        fetchdata()
        
        
    },[Countryname])
    
    return (
        <div style={{display:'flex',flexWrap:'wrap',height:'100vh',paddingTop:'15px',justifyContent:'center'}}>

            {detail.map((data)=>(<Carddetail key={data.name.common}  name={data.name.common} image={data.flags.png} alt={data.flags.alt} />))}
        </div>
    )
}