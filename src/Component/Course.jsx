// 
import React, { useEffect, useState } from 'react';
// import list from "../../public/list2.json";
import Cards from './Cards';
import axios from "axios"
import { Link } from "react-router-dom";


function Course() {
  const [book ,setBook]=useState([])
useEffect(()=>{
  const getBook=async()=>{
    try{
const res =await axios.get("http://localhost:4001/book");
console.log(res.data)
setBook(res.data)
    }
    catch(error){
      console.error(error);
    }
  }
  getBook();
},[])

  return (
    <>
      <div className='max-w-full container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            We are delighted to have you <span className="text-pink-500">Here!</span>
          </h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae, cumque beatae odit ratione quidem, dolores explicabo, perferendis laboriosam sapiente possimus sequi natus eveniet consequuntur qui amet corrupti aperiam ad!
          </p>
          <Link to="/">
        <button  className='text-center bg-red-600 p-3 border rounded-[15px] hover:text-white'>Back</button> 
        </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-6'>
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
