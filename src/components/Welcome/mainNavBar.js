import { useNavigate } from "react-router-dom";
import { Button, Paper } from "@mui/material";
import Image from "../../mainBagrroundC.jpg";
import { Box } from "@mui/system";

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
export default function MainNavBar(){

    const navigate = useNavigate();

    return(
        <nav>
            <center>
            <Paper style={styles.heroContainer}> 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={styleObj}>Welcome to Bailey Barista Training Academy</h1>
            <Box display="flex" justifyContent="center">
            <Button variant='contained' onClick={() => navigate("/login")}>Login</Button>
            <Button variant='contained' onClick={() => navigate("/users")}>Sign Up</Button>
            </Box>
            </Paper>
            </center>
       </nav>
    )
}