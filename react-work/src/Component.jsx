import { useContext } from "react"
import { HisName } from "./App"
function Component(){
const Name = useContext(HisName)
    return(
      <div className="rr">
        <h1>Hello every one wellcome to my project</h1>
        <p>name: cyiza rafiki remy</p><br />
        <p>Class:{Name}</p>
        <p>&copy;C_R_R </p>
      </div>
      
    )
  }
  export default Component