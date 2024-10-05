import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';  // Removed the extra import of Router

import Movies from './components/Movies';
import { Button, Stack } from '@mui/material';
import Pradeep from './components/picsOfPradeep';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Stack direction={"row"} spacing={4}>
              <Link to="/GOPICHANDMOVIES"><Button variant='contained' color='error'>ALLTIMEFAVOURITE</Button></Link>
            <Link to={"/pradeepImages"}><Button variant='contained' color='warning'> PRADEEP</Button></Link>
            </Stack></li>
          </ul>
        </nav>
        
        <Routes>
          {/* Correct usage of Routes and Route */}
          <Route path="/gopichandMovies" element={<Movies />} />
          <Route path='/pradeepImages' element={<Pradeep/>}></Route>
        </Routes>
        
        {/* You can place Counter component wherever you need it */}
        
        
      </div>
    </Router>
  );
}

export default App;
