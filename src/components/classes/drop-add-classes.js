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

const DropClasses  = () => {

  const url = "http://localhost:9008";
  const [user,setUser] = useContext(userContext)
  const navigate = useNavigate();

  const enrollidInput = useRef();
  

  async function dropClass() {
 
    const classesDrop = {
      enrollid: enrollidInput.current.value,
    };

    try {
        const responseGet = await fetch(`${url}/enroll/findAllenrollment`)
        const enrollData = await responseGet.json();
        console.log(enrollData)
        const checkEnroll = enrollidInput.current.value
        for(let i =0; i<enrollData.length; i++){
        if(checkEnroll === enrollData[i].enrollid){
            const response = await axios.delete(`${url}/enroll/delete?enrollid=${enrollidInput.current.value}`, classesDrop)
        }else if(enrollData[i].enrollid===null){
            alert("Course is already droped")
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
          <h1 style={styleObj}> Welcome to classes drop page </h1>
        </nav>
        <br></br>
        <TextField id="outlined-basicDelete" label="Enroll Id" variant="outlined" inputRef={enrollidInput}/>
        <br></br>
        <br></br>
        <Button variant='contained' onClick={dropClass}>Drop</Button>
        <Button variant='contained' onClick={() => navigate("/classesdashboard")}>Back</Button>
       </Paper>
      </center>
    </>
   );
}
 
export default DropClasses ;