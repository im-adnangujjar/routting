import React from 'react';
import { render } from 'react-dom';
import './Home.css'
export default function Home() {


  return (
  <div>
 <div>date in hooks:{Date}</div>
  <h1 id="center">Survey Form</h1>
    <center>
      <div class="sub-div">
        <p>Let us know how we can improve freeCodeCamp</p>
        <div>
          <p><label>.Name:</label>
         <input type="text" placeholder=" adnan" /></p>
          <p><label>.Email:</label>
          <input type="text" placeholder="Enter your email" /></p>
          <p><label>.Age:</label>
          <input type="text" placeholder="23" /></p>
        </div>
        <div>
          <p class="text1">
            Which option best describes your curret role?<select>
              <option class="">student</option>
            </select>
          </p>
          <p className="text2">
            How likely is that you that you would recommend<br />freeCodeCamp to
            a friend? <input type="radio" name="text" value="defiitely" />definitely</p>
            <p><input type="radio" name="text" value="Maybe" />Maybe</p>
            <p><input type="radio" name="text"  value="Not Sure"/>Not sure</p>
        </div>
        <div>
          <p>
            what do you like most in FCC:<select>
              <option>select an option</option>
            </select>
          </p>
          <p>
            that should be improve in the future<br />(Check all that apply):
            <input type="checkbox" name="Front-end Projects" />Front-end
            Projects<br />
            <input type="checkbox" name="back-end Projects" />Back-end
            Projects<br />
            <input type="checkbox" name="Data Visualizatio" />Data
            Visualizatio<br />
          </p>
        </div>
      </div>
    </center>
  </div>
  );
}
