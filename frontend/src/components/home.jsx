import React, { useEffect, useState } from "react";
import { GrView } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsBookHalf } from "react-icons/bs";
import axios from "axios";
import Loading from "./loadnig";
import { Link } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const authToken= sessionStorage.getItem('token')
  const getDta = () => {
    setLoading(true);
    axios
      .get("http://localhost:3001/book")
      .then((res) => {
        setBooks(...books, res.data.result);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err fetching data");
        setLoading(false);
      });
  };
  useEffect(() => {
    getDta();
  },[]);

  return (
    <div className="h-screen ">
      <div className=" flex flex-wrap items-center justify-center">
        <div className=" mr-20 font-bold text-4xl">
          <BsBookHalf />
        </div>
        <h1 className=" m-4 mr-20 font-bold text-4xl">
          Availiable Books
        </h1>
        {
          authToken?<Link to="/addbook">
          <button className="border border-black bg-lime-200 text-black font-bold text-xl rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline">
            Add Book
          </button>
        </Link>:<Link to="/admin">
          <button className="border border-black bg-lime-200 text-black font-bold text-xl rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline">
            Add Book
          </button>
        </Link>
        }

      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className=" w-5/6 bg-orange-200 border-2  mx-auto ">
          <table className="min-w-full divide-y  divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Book-Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Publish-year
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {books.map((val, ind) => (
                <tr key={val._id}>
                  <td className="px-6 py-1 whitespace-nowrap">{ind + 1}</td>
                  <td className="px-6 py-1 whitespace-nowrap">{val.author}</td>
                  <td className="px-6 py-1 whitespace-nowrap">
                    {val.bookname}
                  </td>
                  <td className="px-6 py-1 whitespace-nowrap">{val.year}</td>
                  <td className="px-6 py-1 whitespace-nowrap">
                    <Link to={`/detail/${val._id}`}>
                      <button className="p-4  font-medium text-fuchsia-800 bg-white rounded-md hover:bg-black focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                        <GrView />
                      </button>
                    </Link>
                    <Link to={`/edit/${val._id}`}>
                      <button className={`ml-2 px-4 py-2 font-medium ${authToken ? 'visible' :'hidden'} text-yellow-600 bg-white rounded-md hover:bg-black focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out`}>
                        <FaEdit />
                      </button>
                    </Link>
                  <Link to={`/delete/${val._id}`}>
                      <button className={`ml-2 px-4 py-2 font-medium ${authToken ? 'visible' :'hidden'} text-red-600 bg-white rounded-md hover:bg-black focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out`}>
                        <MdDelete />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Home;
