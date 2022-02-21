import React,{useState} from 'react';
import axios from 'axios'

function Addstudent() {

    const[name,setname]=useState("")
    const[age,setage]=useState("")
    const [gender, setgender] = useState("")

    const submitHandler= (e)=>{
        e.preventDefault()

        const newstudent={name,age,gender}
        // console.log(newstudent)
        axios.post('http://localhost:4000/students/add',newstudent).then(()=>{
            alert(`student added succesfully`)
            
        }).catch((err)=>{
            alert(err)
        })

        // setname("");
        // setage("");
        // setgender("");
    }

  return <div>
      <form className='container' onSubmit={submitHandler}>
          <fieldset >
              <legend className='text-center'>student adding form</legend>
              <div className="mb-3">
                  <label for="student_name" className="form-label">student name</label>
                  <input type="text" id="name" className="form-control" onChange={(e)=>setname(e.target.value)} placeholder="student name"/>
              </div>
              <div className="mb-3">
                  <label for="student_age" className="form-label">student age</label>
                  <input type="text" id="age" className="form-control" onChange={(e)=>setage(e.target.value)} placeholder="student age" />
              </div>
              <div className="mb-3">
                  <label for="student_gender" className="form-label">student gender</label>
                  <input type="text" id="gender" className="form-control" onChange={(e)=>setgender(e.target.value)} placeholder="student gender" />
              </div>
             
              <button type="submit" className="btn btn-primary text-center">Submit</button>
          </fieldset>
      </form>
  </div>;
}

export default Addstudent;
