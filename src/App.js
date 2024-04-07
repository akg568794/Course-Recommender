
import { useEffect, useState } from 'react';
import {apiUrl,filterData} from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import {toast} from "react-toastify";
import {Spinner} from "react-bootstrap";

function App() {
  const [courses,setCourses]=useState([]);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);
  useEffect(()=>{
    const fetchData=async()=>{
      setLoading(true)
      try{
        const res=await fetch(apiUrl);
        const data=await res.json();
        setCourses(data.data);
        console.log(courses);
      }
      catch(err){
        toast.error("Api ki gend fat gye");
      }
      setLoading(false)
    }
    fetchData();
  },[])
  return (
    <div className='min-h-screen flex flex-col bg-bgDark2'>
    <div >
      <Navbar></Navbar>
    </div>
    <div>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-col flex-wrap justify-center items-center min-h-[50vh]' >
        {loading ? (<Spinner/>):(<Cards key={courses.id} courses={courses} category={category}/>)}
      </div>
    </div>
    
      
      
    </div>
  )

}   

export default App;
