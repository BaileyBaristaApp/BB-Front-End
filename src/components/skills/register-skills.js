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

const SkillRegister  = () => {

  const url = "http://localhost:9008";
  const [user,setUser] = useContext(userContext)
  const navigate = useNavigate();

  const skillIdInput = useRef();
  const skillNameInput = useRef();
  const courseIdInput = useRef();
  const skillNameInputDelete = useRef();

  async function register() {
    const skills = {

      skillid: skillIdInput.current.value,
      sname: skillNameInput.current.value,
      courseid: courseIdInput.current.value
    };

    try {
      const response = await axios.post(`${url}/skills/register`, skills);
      console.log(response.data)
     //navigate("/login");
   } catch (error) {
        console.error(error.response);
   }
  
  }

  async function deleteSkills() {
 
    const skillsDelete = {
      skillid: skillNameInputDelete.current.value,
    };

    try {
        const responseGet = await fetch(`${url}/skills/findAllSkills`)
        const skillsData = await responseGet.json();
        const checkSkill = skillNameInputDelete.current.value
        for(let i =0; i<skillsData.length; i++){
        if(checkSkill === skillsData[i].skillid){
            const response = await axios.delete(`${url}/skills/delete?skillid=${skillNameInputDelete.current.value}`, skillsDelete)
        }else if(skillsData[i].sname===null){
            alert("Credit Card is already deleted")
            console.log(responseGet)
        }
      }
           
        } catch (error) {
        console.log("Error Occured")
    }
}


  return ( 
    <>
      <center>
       <Paper style={styles.heroContainer}> 
        <nav className="skills">
          <h1 style={styleObj}> Welcome to Add/Remove skills page </h1>
        </nav>
        <TextField id="outlined-basicS" label="Skill ID1" variant="outlined" inputRef={skillIdInput}/>
        <br></br>
        <TextField id="outlined-basicK" label="Skill Name" variant="outlined" inputRef={skillNameInput}/>
        <br></br>
        <TextField id="outlined-basicC" label="Course ID" variant="outlined" inputRef={courseIdInput}/>
        <br></br>
        <Button variant='contained' onClick={register}>Add</Button>
        <br></br>
        <br></br>
        <TextField id="outlined-basicDelete" label="Skill Name D" variant="outlined" inputRef={skillNameInputDelete}/>
        <br></br>
        <br></br>
        <Button variant='contained' onClick={deleteSkills}>Remove</Button>
        <Button variant='contained' onClick={() => navigate("/usersdashboard")}>Back</Button>
       </Paper>
      </center>
    </>
   );
}
 
export default SkillRegister ;