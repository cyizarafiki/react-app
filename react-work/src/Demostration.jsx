import React, {useState,useEffect} from "react"
function Demostration(){
    const [age, setAge,decAge]=useState(0)
    const [color,setColor]=useState("green")   
    useEffect(()=>{
        document.title=`change your age and color   :${age} ${color} `
    },[age,color])
    const incrementAge=()=>{
        setAge(age +1)
    }
    const decreaseAge=()=>{
        setAge(age -1)
    }
    const changeColor=()=>{
        setColor( color=>color==="magenta"?"cyan":"magenta")
    }
    const reset=()=>{
        setAge(age *0)
    }

    return(
        <div className="hh">
            <u>USE STATE HOOK</u>
            <p style={{color:color, fontSize:'50px', marginLeft:'40px'}}>Age: {age}</p>
            <button onClick={incrementAge}>IncreaseAge</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decreaseAge}>DecreaseAge</button><br />
            <u>USE EFFECT HOOK</u> <br />
            <button onClick={changeColor}>Changecolor</button>
            
        </div>
    )
    }
    

export default Demostration