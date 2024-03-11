import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Addbook() {
  const [bookdetails, setbookdetails] = useState({
    author: "",
    bookname: "",
    year: "",
    price: "",
    description: "",
  });
  const navigate=useNavigate()
  const inputhandle = (e) => {
    setbookdetails({ ...bookdetails, [e.target.id]: e.target.value });
  };
  const addbook = () => {
    // const {author, bookname, year, price, description}=bookdetails
    axios.post("http://localhost:3001/book", bookdetails).then((da) => {
     toast(da.data.message);
      setTimeout(()=>
      {navigate('/')},3000)
    });
  };
  return (
    <div>
      <div className="bg-white border-4 rounded-lg shadow relative m-10">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Add Book</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="product-modal"
          >
            <Link to="/">
              <AiOutlineClose />
            </Link>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <form action="#">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="author"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Author Name
                </label>
                <input
                  type="text"
                  id="author"
                  onChange={inputhandle}
                  value={bookdetails.author}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="bookname"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Book Name
                </label>
                <input
                  type="text"
                  id="bookname"
                  onChange={inputhandle}
                  value={bookdetails.bookname}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="year"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Publish Year
                </label>
                <input
                  type="text"
                  id="year"
                  onChange={inputhandle}
                  value={bookdetails.year}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  onChange={inputhandle}
                  value={bookdetails.price}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Descrption
                </label>
                <textarea
                  id="description"
                  rows="6"
                  onChange={inputhandle}
                  value={bookdetails.description}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="Description"
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-gray-200 rounded-b">
          <button
            className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="button"
            onClick={addbook}
          >
            Add Book
          </button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Addbook;
