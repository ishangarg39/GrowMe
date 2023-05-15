import {Button,TextField} from '@mui/material';
import{useState} from "react"
import { useNavigate } from 'react-router-dom';
export default function Page1() {
    const [Name, setName] = useState("");
    const [Phone, setPhone] = useState("");
    const [Email, setEmail] = useState("");
    const navigate=useNavigate();
const handleclick=(event: { preventDefault: () => void; })=>{
    event.preventDefault();
    if(Name&& Phone&&Email)
{
    // Access form values using event.target
    
    // Store user details in local storage
    localStorage.setItem('Name', Name);
    localStorage.setItem('Email', Email);

    // Do something with the user details
    console.log('User details:', Name, Email);
navigate('/Page2')}

else{
    alert("Fill all Details")
}}
  return (
    <div>
        <h1>Page1</h1>
        <h2>Enter Details</h2>
        <TextField label="Name" color="secondary" focused onChange={(event) => { setName(event.target.value) }}/>
        <TextField label="Phone Number" color="secondary" focused onChange={(event) => { setPhone(event.target.value) }}/>
        <TextField label="Email" color="secondary" focused onChange={(event) => { setEmail(event.target.value) }}/>
        <p></p><Button variant="contained" onClick={handleclick}disableElevation>
  Submit
</Button>
    </div>
  )
}
