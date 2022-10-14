import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useRef } from "react";
import { useState ,useContext} from "react";
import { userContext } from "../../App";
import axios from "axios";
import { ClassNames } from "@emotion/react";




const SignUpChallenge = () => {
    const navigate = useNavigate();
    const url = "http://localhost:9008";
    const chaIdInput = useRef();
    const chnameInput = useRef();
    const IdInput = useRef();
   
    const [users, setUsers] = useContext(userContext)
    async function register() {
      
      const challenges = {
        chaid: chaIdInput.current.value,
        chname: chnameInput.current.value,
        id: IdInput.current.value,
      };
     
      try {
        const response = await axios.post(`${url}/challenges/register`, challenges);
        console.log(response.data);
          //navigate("/challenges");
    } catch (error) {
        console.error(error.response.data);
    }
    
  }
 
    return ( 
      <>
      <center>
      <nav className="userNavBar">
      <h1> Welcome to challenge register page </h1>
      </nav>
      <br></br>
      <TextField id="outlined-basicC" label="Challenge ID" variant="outlined" inputRef={chaIdInput}/>
      <br></br>
      <br></br>
      <TextField id="outlined-basicn" label="Challenge Name" variant="outlined" inputRef={chnameInput}/>
      <br></br>
      <br></br>
      <TextField id="outlined-basicid" label="id" variant="outlined" inputRef={IdInput}/>
      <br></br>
     <br></br>
      <Button variant='contained' onClick={register}>Add</Button>
      <Button variant='contained' onClick={() => navigate("/challengedashboard")}>Back</Button>
      <br></br>
      </center>
      </>

     );
}
 
export default SignUpChallenge;