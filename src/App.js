import { useState } from 'react';
import {Box, Container, Button, TextField  } from '@mui/material';
import FormDisplay from './components/FormDisplay';
function App() {
  const [displayDetails,setDisplayDetails] = useState([]);
  
  const [pname,setProductName] = useState('');
  const [pprice,setProductPrice] = useState('');
    function handleSubmit(event){
    event.preventDefault();
    setDisplayDetails([...displayDetails,{ProductName :pname,ProductPrice :pprice}])
    setProductName('')
    setProductPrice('')

  }
  console.log(displayDetails);
  return (
    <div>
      <div><Box sx ={{textAlign:'center',fontSize:'40px',padding:'20px',}}>AYYANAR STORE</Box>
    <Container sx = {{backgroundColor:'#87CEFA',padding:'30px',height:'50',width:'100',border:'1px solid black'}}>
      <form onSubmit = {handleSubmit}>
        <div><TextField color='secondary' fullWidth  label = 'Product Name' varient = 'outlined' value = {pname} onChange={(event)=>setProductName(event.target.value)} required/></div>
        <div><TextField color='secondary'  fullWidth  label = 'Product Price' value = {pprice} varient = 'outlined' onChange={(event)=>setProductPrice(event.target.value)} required/></div>
        <div><Button type = 'submit' variant="contained" sx ={{textAlign:'center'}}>UPLOAD</Button> </div>
        </form>
        </Container>
        </div>
      <div>
      <FormDisplay displayDetails = {displayDetails} setDisplayDetails = {setDisplayDetails} setProductName = {setProductName} setProductPrice = {setProductPrice} />
      </div>

    </div>


  );
}

export default App;
