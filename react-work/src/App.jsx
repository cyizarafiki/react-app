import Component from "./Component";
import {Link,Routes,Route} from "react-router-dom"
import Home from "./Home";
import Intro from "./Intro";
import Demostration from "./Demostration";
import Example from "./Example"
import { createContext, useState } from "react";

export const HisName = createContext()
function App(){
  const [Name , setName]= useState("L5SOD")
  
  return(
    <div>
      <div className="umu">
        <Link to="/">Home</Link>|
        <Link to="/intro">Introduction</Link>|
        <Link to="/example">Example of hooks</Link>|
        <Link to="demo">Demostration</Link>

      </div>
      <div>
        <Routes>
          <Route path="/" element={
            <HisName.Provider value={Name}>
            <Component/>
            </HisName.Provider>
            }></Route>
        <Route path="/intro" element={<Intro/>}></Route>
        <Route path="/demo" element={
          
          <Demostration/>
          }></Route>
       <Route path="/example" element={<Example/>}></Route>
        </Routes>
      </div>
      
    </div>  
  )
}
export default App