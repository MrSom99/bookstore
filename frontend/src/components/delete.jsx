import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import Loading from './loadnig'
function Delete() {
  const [deleting,setDeleting]=useState(false)
  const params= useParams()
  const navigate= useNavigate()
  const deleteData=()=>{
    setDeleting(true)
    axios.delete('http://localhost:3001/book/'+params.id)
    .then((da)=>{
      alert(da.data.message)
      setDeleting(false)
    }).catch((err)=>{
      alert('failed to delte')
      setDeleting(false)
    })
   
  }
useEffect(()=>{
  deleteData()
},[])

  return (
    <div>
      {deleting?<Loading/>:navigate('/')}
      </div>
  )
}

export default Delete