import React from 'react'
import Sidenavbar from '../components/sidenavbar'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Productlist from './product/Productlist';

function    Products() {
  return (
   <>
    <div className="bgcolor">
     <Navbar/>
   <Box height={100}/>
   <Box sx={{ display: 'flex' }}>
    <Sidenavbar/>
    
   <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
   <Productlist/> 
      </Box>
      </Box>
      </div>
    
   </>
  )
}

export default Products;