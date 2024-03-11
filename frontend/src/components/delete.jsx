import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./loadnig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Delete() {
  const [deleting, setDeleting] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const deleteData = () => {
    setDeleting(true);
    axios
      .delete("http://localhost:3001/book/" + params.id)
      .then((da) => {
        toast(da.data.message);
        setDeleting(false);
      })
      .catch((err) => {
        toast("failed to delete");
        setDeleting(false);
      });
  };
  useEffect(() => {
    deleteData();
  }, []);

  return <div>
    {deleting ?
      <div>
    {setTimeout(()=>{
      navigate('/')
    },3000)}
    <ToastContainer/>
      </div>
    :<Loading/>}
  </div>;
}

export default Delete;
