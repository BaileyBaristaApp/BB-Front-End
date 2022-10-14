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

const CourseRegister  = () => {

  const url = "http://localhost:9008";
  const [user,setUser] = useContext(userContext)
  const navigate = useNavigate();

  const coursesIdInput = useRef();
  const coursesNameInput = useRef();
  const idInput = useRef();


  async function register() {
    const courses = {

      courseid: coursesIdInput.current.value,
      coname: coursesNameInput.current.value,
      id: idInput.current.value
    };

    try {
      const response = await axios.post(`${url}/courses/register`, courses);
      console.log(response.data)
     //navigate("/login");
   } catch (error) {
        console.error(error.response);
   }
  
  }
  return ( 
    <>
      <center>
       <Paper style={styles.heroContainer}> 
        <nav className="skills">
          <h1 style={styleObj}> Welcome to add courses page </h1>
        </nav>
        <TextField id="outlined-basicc" label="Course Id" variant="outlined" inputRef={coursesIdInput}/>
        <br></br>
        <TextField id="outlined-basicCN" label="Courses Name" variant="outlined" inputRef={coursesNameInput}/>
        <br></br>
        <TextField id="outlined-basiid" label="ID" variant="outlined" inputRef={idInput}/>
        <br></br>
        <Button variant='contained' onClick={register}>Add</Button>
        <Button variant='contained' onClick={() => navigate("/usersdashboard")}>Back</Button>
       </Paper>
      </center>
    </>
   );
}
 
export default CourseRegister ;