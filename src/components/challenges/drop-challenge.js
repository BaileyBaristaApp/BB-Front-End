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

const DropChallenge = () => {

  const url = "http://localhost:9008";
  const [user,setUser] = useContext(userContext)
  const navigate = useNavigate();

  const chaidInput = useRef();
  

  async function dropClass() {
 
    const challengeDrop = {
      chaid: chaidInput.current.value,
    };

    try {
        const responseGet = await fetch(`${url}/challenges/findAllChallenges`)
        const challengesData = await responseGet.json();
        console.log(challengesData)
        const checkEnroll = chaidInput.current.value
        for(let i =0; i<challengesData.length; i++){
        if(checkEnroll === challengesData[i].chaid){
            const response = await axios.delete(`${url}/challenges/delete?chaid=${chaidInput.current.value}`, challengeDrop)
        }else if(challengesData[i].chaid===null){
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
          <h1 style={styleObj}> Welcome to challenge drop page </h1>
        </nav>
        <br></br>
        <TextField id="outlined-basicDelete" label="Challenge Id" variant="outlined" inputRef={chaidInput}/>
        <br></br>
        <br></br>
        <Button variant='contained' onClick={dropClass}>Drop</Button>
        <Button variant='contained' onClick={() => navigate("/challengedashboard")}>Back</Button>
       </Paper>
      </center>
    </>
   );
}
 
export default DropChallenge ;