import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
function DetailView() {
  const params= useParams()
  const [detail,setDetails]=useState([])
  const getDetail=()=>{
    axios.get("http://localhost:3001/book/"+params.id)
    .then((res)=>{console.log(res.data.result)
      setDetails(res.data.result)}
    )}
  useEffect(()=>{
    getDetail()
  },[])
  return (
    <div className='bg-slate-400 h-screen w-screen  flex justify-center items-center'>
      
            {detail.map((val,ind)=>
                <div  className=" bg-orange-300 h-2/4 w-3/5 p-2 flex-col  text-center border-4 justify-center items-center" key={val._id}>
                  <div className=' text-xl'>{val.bookname}</div>
                  <span className='font-light'>by</span>
                  <div className='text-xl'>{val.author}</div>
                  <span className='font-bold text-opacity-50'>Brief Description</span>
                  <div>{val.description}</div>
                  <span>Rs:{val.price}</span>
                  <br></br>
                  <button className='border-2 font-bold bg-white p-1 border-black rounded-sm'><Link to="/" >Home</Link></button>
                </div>
            )}
      
    </div>
  )
}

export default DetailView