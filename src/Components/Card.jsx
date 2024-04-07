import React, { useState } from 'react'
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Card({course,likedCourses,setLikedCourses}) {
  
  function clickHandler(){
    if(likedCourses.includes(course.id)){
      setLikedCourses((prev)=>prev.filter((cid)=>cid!==course.id))
      toast.warning("like removed");
      
    }else{
      if(likedCourses.length===0){
          setLikedCourses([course.id]);
      }
      else{
          setLikedCourses((prev)=>[...prev,course.id]);
      }
      toast.success("Liked successfully");
    }
  }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative '>
        <img src={course.image.url}></img>
        <div className='absolute rounded-full w-[40px] h-[40px] bg-white right-2 bottom-[-12px] grid place-items-center'>
          <button className='cursor' onClick={clickHandler}>{likedCourses.includes(course.id)? (<FcLike fontSize="1.75rem" />):(<FcLikePlaceholder fontSize="1.75rem" />) }</button>
        </div>
      </div>
      
      <div className='m-3'>
        <p className='text-white font-semibold text-lg leading-6 py-2'>{course.title}</p>
        <p className='text-white mt-2'>{course.description.length>100 ? (course.description.substr(0,100)) +"...": (course.description) }</p>
      </div>
    </div>
  )
}
