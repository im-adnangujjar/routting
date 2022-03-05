import React from 'react';
import "./Skills.css"
import { useState } from "react";
export default function Skills() {
  // let counter= 0;
  const [counter, setCounter] = useState(0)

  const increamentHandler = () => {
    setCounter(counter + 1)
  }

  const decreamentHandler = () => {
    setCounter(counter - 1)
  }
  const [student, setStudent] = useState([
    {
      Name: "amjad",
      Class: "Web and Mobile",
      RollNumber: "8098",
      Batch: "Batch4"
    },

    {
      Name: "gujjar",
      Class: "Web and Mobile",
      RollNumber: "8098",
      Batch: "Batch4"
    },

    {
      Name: "ahmad",
      Class: "Web and Mobile",
      RollNumber: "8098",
      Batch: "Batch4"
    },

   
  ])
  const [Name, setName ]= useState("")
  const [password,setPassword]= useState("uyggj")
  const [Class , setClass] = useState("")

  return (
    <div>
      <h3 clasName="heading">Our Skil</h3>
      <p className='paragraph3'>i am full stakcs develpers </p>
      <p className='paragraph4'>paython</p>
      <label>Name='Name'</label>
      <input type="text"  onChange={(e)=>setName(e.target.value)}placeholder="enter your name "/>
     <label> password</label>
     <input type='password' placeholder='Enter your password '/>
     <label> className</label>
 <input type="text" placeholder='Enter your class name'/>

 
      <button onClick={decreamentHandler}>-</button>
      <span style={{ padding: "20px" }}> {counter} </span>
      <button onClick={increamentHandler}>+</button>


      {
        student.map((student) => {

          return (
            <div>
              <input type="text" placeholder={student.Name} />
              <br />

              <input type="type" placeholder={student.RollNumber} />
              <br />
              <input type="text" placeholder={student.Batch} />
              <br />
              <input type="text" placeholder={student.Class} />
            </div>
          )
        })
      }




    </div>
  );
}
