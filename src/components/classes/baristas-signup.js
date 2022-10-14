import { Button, ListItem, Paper, TextField } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import axios from "axios";


const styles = {
  heroContainer: {
    height: "100vh",
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
  paddingTop: "100px",
}

const BaristaSignUp = () => {

  const enrollIdInput = useRef();
  const cNameInput = useRef();
  const enrollInput = useRef();
  const idInput = useRef();


  const [user, setUser] = useContext(userContext);
  const navigate = useNavigate();
  const url = "http://localhost:9008";

  const [body, setBody] = useState([]);

  
 
  async function enroll() {
    const enroll = {
      enrollid: enrollIdInput.current.value,
      cname: cNameInput.current.value,
      enroll: enrollInput.current.value,
      id: idInput.current.value
    };
   
    try {
      const response = await axios.post(`${url}/enroll/register`, enroll);
      console.log(response.data)
      
    } catch (error) {
      console.error(error.response);
    }
  }
  
  useEffect(() => {
    const getData = async () => {
    const response = await fetch(`${url}/classes/findAllClasses`);
    const classesData = await response.json();
    setBody(classesData);
    };
    getData();
  }, []);

  const array = [];

  for (let i = 0; i < body.length; i++){
    array[i] = body[i].cname;
  }

  return ( 
    <>
      <center>
      <Paper style={styles.heroContainer}> 
      <nav className="mainNavBar">
        <h1 style={styleObj}> Welcome to Enroll page </h1>
      </nav>  
      <TextField id="outlined-basicU" label="Enroll ID" variant="outlined" inputRef={enrollIdInput}/>
      <br></br>
      <h4>List of Classes</h4>
      <select>
          {array.map(e=>{return(<option key={e}>{e}</option>)})}
      </select>
      <br></br>
      <TextField id="outlined-basicF" label="Class Name,chooes above" variant="outlined" inputRef={cNameInput}/>
      <br></br>
      <TextField id="outlined-basicL" label="Enroll(true/false)" variant="outlined" inputRef={enrollInput}/>
      <br></br>
      <TextField id="outlined-basicL" label="ID" variant="outlined" inputRef={idInput} />
      <br></br>
      <Button variant='contained' onClick={enroll}>Enroll</Button>
      <Button variant='contained' onClick={() => navigate("/classesdashboard")}>Back</Button>
      <br></br>
      </Paper>
      </center>
    </>
   );
}
 
export default BaristaSignUp;
