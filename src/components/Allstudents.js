import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './Allstudents.css'

function Allstudents() {

    const[students,setstudents]=useState([]);

    useEffect(()=>{
        const getallstudents =()=>{
            axios.get("http://localhost:4000/students/").then((response)=>{
                // console.log(response)
                setstudents(response.data)
            }).catch((err)=>{
                alert(err.message)
            })
        }

        getallstudents()
    },[])

  return <div>
      {students.map((iteam)=>{
          const { name, age, gender } = iteam;
          return(
          <div className='student_display'>
              <p>{name}</p>
              <p>{age}</p>
              <p>{gender}</p>
          </div>
          )
          
      })}
  </div>;
}

export default Allstudents;
