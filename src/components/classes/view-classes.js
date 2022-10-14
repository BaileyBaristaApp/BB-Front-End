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

const ViewClasses = () => {

const url = "http://localhost:9008";

const navigate = useNavigate();

const [user] = useContext(userContext);

const [body, setBody] = useState([]);

useEffect(() => {
    display();
}, []);

async function display() {

    try {
        
        const response = await fetch(`${url}/classes/findAllClasses`);
        const classesData = await response.json();
        console.log(classesData);
        const classesDataRows = classesData.map((e)=>{
            
            return (
                <TableRow>
                    <TableCell align="center" key ={1}>{e.id}</TableCell>
                    <TableCell align="center" key ={2}>{e.cname}</TableCell>
                    <TableCell align="center" key={3}>{e.sdate}</TableCell>
                    <TableCell align="center" key ={4}>{e.edate}</TableCell>
                </TableRow>
            );
        });
    
        setBody(classesDataRows);
    } catch (e) {
        console.error(e);

    }
}

    return ( 
      <>
      <center>
        <nav className="baristasup">
           <h1 style={styleObj}>Welcome to classes page</h1>
        </nav>
        <TableContainer component={Paper}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell style={{backgroundColor:'lightgrey', color: 'black' }} align="center">ID</TableCell>
                        <TableCell style={{backgroundColor:'lightgrey', color: 'black' }} align="center">Classe Name</TableCell>
                        <TableCell style={{backgroundColor:'lightgrey', color: 'black' }} align="center">Start Date</TableCell>
                        <TableCell style={{backgroundColor:'lightgrey', color: 'black' }} align="center">End Date</TableCell>
                    </TableRow>
                </TableHead>
                <tbody>{body}</tbody>
            </Table>
            </TableContainer>
            <Button variant='contained' onClick={() => navigate("/classesdashboard")}>Back</Button>
      </center>
      </>

     );
}
export default ViewClasses;