import React,{useState} from 'react'
import Card from "./Card";

export default function Cards({courses,category}) {
  const [liked,setLiked]=useState([]);
  
  // TODO: This getCourses function returns a list of all courses received from the api courses
  function getCourses(){
    if(category==="All"){
      let allCourses=[];
      Object.values(courses).forEach((courseCategory)=>{
      courseCategory.forEach((course)=>{
        allCourses.push(course);
      }
    )})
    return allCourses;
    }
    else{
      return courses[category];
    }
    
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {getCourses().map((course)=>{
        return <Card key={course.id} course={course} likedCourses={liked} setLikedCourses={setLiked}/>
      })}
    </div>
  )
}
