import { useNavigate } from "react-router-dom";
import { useState ,useContext} from "react";
import { Button, Paper, TextField } from "@mui/material";
import { userContext } from "../../App";
import axios from "axios";
import React, { useRef } from "react";
import Image from "../../mainBagrroundC.jpg";

const styles = {
  heroContainer: {
    height: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: "100%",
    margin: 0,
    padding: 5,
    opacity: "100%",
  }
 };

 const styleObj = {
  fontSize: 25,
  color: "#4a44f1",
  textAlign: "center",
  paddingTop: "10px",
}


const Register = () => {
  const navigate = useNavigate();

  const url = "http://localhost:9008";
   
  const usernameInput = useRef();
  const fnameInput = useRef();
  const lnameInput = useRef();
  const passwordInput = useRef();
  const rdateInput = useRef();
  const isTeacherInput = useRef();
  const isAdminInput = useRef();
  const emailInput = useRef();

  const [user,setUser] = useContext(userContext)

  async function register() {
    const users = {
      username: usernameInput.current.value,
      fname: fnameInput.current.value,
      lname: lnameInput.current.value,
      password: passwordInput.current.value,
      rdate: rdateInput.current.value,
      isTeacher: isTeacherInput.current.value,
      isAdmin: isAdminInput.current.value,
      email: emailInput.current.value
    };

    try {
      const response = await axios.post(`${url}/users/register`, users);
      console.log(response.data.data);
      navigate("/login");
  } catch (error) {
      console.error(error.response);
  }
  
  }
  return ( 
    <>
      <center>
      <Paper style={styles.heroContainer}> 
      <nav className="mainNavBar">
        <h1 style={styleObj}> Welcome to registration page </h1>
      </nav>
      <TextField id="outlined-basicU" label="Username" variant="outlined" inputRef={usernameInput}/>
      <br></br>
      <TextField id="outlined-basicF" label="First Name" variant="outlined" inputRef={fnameInput}/>
      <br></br>
      <TextField id="outlined-basicL" label="Last Name" variant="outlined" inputRef={lnameInput}/>
      <br></br>
      <TextField id="outlined-basicP" type="password" label="Password" variant="outlined" inputRef={passwordInput}/>
      <br></br>
      <br></br>
      <TextField id="outlined-basicD" type="date" label="Registration Date" variant="outlined" inputRef={rdateInput} InputLabelProps={{ shrink: true}}/>
      <br></br>
      <br></br>
      <TextField id="outlined-basicT" label="is Teacher" variant="outlined" inputRef={isTeacherInput}/>
      <br></br>
      <TextField id="outlined-basicA" label="is Admin" variant="outlined" inputRef={isAdminInput}/>
      <br></br>
      <TextField id="outlined-basicE" label="Email" variant="outlined" inputRef={emailInput}/>
      <br></br>
      <br></br>
          <Button variant='contained' onClick={register }>Register</Button>
      <Button variant='contained' onClick={() => navigate("/mainnavbar")}>Back</Button>
      <br></br>
      </Paper>
      </center>
    </>

   );
}
 
export default Register;