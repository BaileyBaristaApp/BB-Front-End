import { useNavigate } from "react-router-dom";
import { Box, Button, Paper } from "@mui/material";
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

export default function ClassesNavBar(){

    const navigate = useNavigate();

   

    return(
        <>
        <center>
        <Paper style={styles.heroContainer}> 
          <h1 style={styleObj}>Barista's Dashboard </h1>
        <Box display="flex" justifyContent="center">
            <Button variant='contained' onClick={() => navigate("/baristasignup")}>Enroll</Button>
              <Button variant='contained' onClick={() => navigate("/classesview")}>View classes</Button>
              <Button variant='contained' onClick={() => navigate("/dropclasses")}>Drop Classes</Button>
              <Button variant='contained' onClick={() => navigate("/challengedashboard")}>Challenges</Button>
              <Button variant='contained' onClick={() => navigate("/coursesdashboard")}>Courses</Button>
            <Button  variant='contained' onClick={() => navigate("/mainnavbar")}>Log Out</Button>   
        </Box>
          </Paper>
        </center>
        </>
    )
}