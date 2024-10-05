
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import { Button, Stack } from '@mui/material';
import Trial1 from './components/customersDataTrail';
import CreateCustomer from './components/addCustomerData';
import Edit from './components/modifyExistingCustomer';
import DeleteCustomer from './components/deleteCustomerById';
import FindCustomer from './components/findCustomerById';
import AddCustomer from './components/addCustomerData';
import ViewCustomers from './components/customersDataTrail';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
       
          <Stack direction={"row"} spacing={6}>
            <Link to = {"create"}> <Button color='success' variant='contained'>CREATE <AddBoxIcon/></Button></Link>
            <Link to={"/read"} ><Button variant='contained' color='error'>READ <MenuBookTwoToneIcon/></Button></Link>
           <Link to={"delete"}><Button color='primary' variant='contained'>DELETE <DeleteOutlineOutlinedIcon/></Button></Link>
            <Link to={"update"}><Button color='secondary' variant='contained'>UPDATE <BorderColorOutlinedIcon/></Button></Link>
            <Link to={"findById"}><Button color='warning' variant='contained'>FIND <SearchSharpIcon/></Button></Link>
            
          </Stack>
   
        </ul>
      </nav>
     

      <Routes>
       <Route path='create' element={<AddCustomer/>}/>
       <Route path='read' element = {<ViewCustomers/>}/>
        <Route path='update' element = {<Edit/>}/>
        <Route path='delete'  element={<DeleteCustomer/>}/>
        <Route path='findById' element={<FindCustomer/>}/>
      </Routes>
      
    </div>
  </Router>
  );
}

export default App;
