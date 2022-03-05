import { BrowserRouter, Route, Routes,  } from "react-router-dom"

import AboutUs from "../aboutUs/AboutUs"
import ContactUs from "../ContactUs/ContactUs";
import Links  from "../links/Links";
import Home from "../home/Home"
import Skills from "../skills/Skills";
import Services from "../services/Services"
import Navbar from "../commonComponent/navbar/Navbar"
export default function Routing() {
    return (
        <div>
           

           <BrowserRouter>
           <Navbar/>
                <Routes>
                    <Route  path="/AboutUs" element={<AboutUs/>}/>
                       
                    
                    <Route  path="/ContactUs" element={<ContactUs />}/>
                        
            
                    <Route path="/Links"     element={<Links/>}/>

                    <Route path="/Skills"    element={<Skills/>}/>
                    
                    
                    <Route path="/Services"   element={<Services/>}/>
        
                    <Route path="/Home"   element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}