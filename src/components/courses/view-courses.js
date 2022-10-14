import { Button, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { userContext } from "../../App";
import { useState ,useContext, useEffect} from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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

const ViewCourses = () => {

const url = "http://localhost:9008";

const navigate = useNavigate();

const [user] = useContext(userContext);

const [body, setBody] = useState([]);

useEffect(() => {
    display();
}, []);

async function display() {

    try {
        
        const response = await fetch(`${url}/courses/findAllCourses`);
        const coursesData = await response.json();
        console.log(coursesData);
        const coursesDataRows = coursesData.map((e)=>{
            
            return (
                <TableRow>
                    <TableCell align="center" key ={1}>{e.courseid}</TableCell>
                    <TableCell align="center" key ={2}>{e.coname}</TableCell>
                    <TableCell align="center" key ={3}>{e.id.id}</TableCell>
                </TableRow>
            );
        });
    
        setBody(coursesDataRows);
    } catch (e) {
        console.error(e);

    }
}

    return ( 
      <>
      <center>
        <nav className="baristasup">
           <h1 style={styleObj}>Welcome to courses page</h1>
        </nav>
        <TableContainer component={Paper}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell style={{backgroundColor:'lightgrey', color: 'black' }} align="center">Challenge ID</TableCell>
                        <TableCell style={{backgroundColor:'lightgrey', color: 'black' }} align="center">Challenge Name</TableCell>
                        <TableCell style={{backgroundColor:'lightgrey', color: 'black' }} align="center">Class ID</TableCell>
                    </TableRow>
                </TableHead>
                <tbody>{body}</tbody>
            </Table>
            </TableContainer>
            <Button variant='contained' onClick={() => navigate("/coursesdashboard")}>Back</Button>
      </center>
      </>

     );
}
export default ViewCourses;