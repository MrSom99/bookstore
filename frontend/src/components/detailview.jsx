import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
function DetailView() {
  const params = useParams();
  const [detail, setDetails] = useState([]);
  const getDetail = () => {
    axios.get("http://localhost:3001/book/" + params.id).then((res) => {
      console.log(res.data.result);
      setDetails(res.data.result);
    });
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div className=" h-screen w-screen  sm:flex sm:justify-center sm:items-center">
      {detail.map((val, ind) => (
        <div
          className="m-2 sm:m-0 sm:w-1/5 p-2 sm:flex-col shadow-lg shadow-red-700 text-center border-4 sm:justify-center sm:items-center"
          key={val._id}
        >
          <span className="font-bold text-opacity-50">Brief Description</span>
          <div>{val.description}</div>
          <br></br>
          <button className="border-2 font-bold bg-white p-1 hover:bg-black hover:text-white border-black rounded-sm ">
            <Link to="/">Home</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default DetailView;
