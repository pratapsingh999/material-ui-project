import React from 'react'
import Sidenavbar from '../components/sidenavbar'
import Navbar from '../components/Navbar'
import Accordiondash from '../components/Accordiondash';
import Barchart from '../charts/Barchart';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
// import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
// import "../dash.css";
import "../pages/Home.css"
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CountUp from 'react-countup';

function Home() {
  return (
   <>
   <div className="bgcolor">
   <Navbar/>
   <Box height={60}/>
   <Box sx={{ display: 'flex' }}>
    <Sidenavbar/>
   {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}> */}

   <Box component="main" sx={{flexGrow:1,p:3}}>
    <Grid container spacing={2}>
    <Grid item xs={8}>
    <Stack spacing={2} direction="row">
    <Card className="Card" sx={{ minWidth: 49+"%" , height:150 }}  >
        <CardContent >
        <div className='icon'>
        <CreditCardIcon/>
        </div>
          <Typography gutterBottom variant="h5" component="div" sx={{color:"white"}}>
            $<CountUp delay={0.2} end={500} duration={0.5}/>

          </Typography>
          <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}} >
         Total Earnings
          </Typography>
        </CardContent>
    </Card>

    <Card sx={{ minWidth: 49+"%" , height:150 }} className="Cards">
        <CardContent >
        <div className='icon'>
       <ShoppingBagIcon/>
        </div>
          <Typography gutterBottom variant="h5" component="div" sx={{color:"white"}}>
            $<CountUp delay={0.2} end={900} duration={0.5}/>

          </Typography>
          <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
         Total Orders
          </Typography>
        </CardContent>
    </Card>
    </Stack>
    </Grid>

    <Grid item xs={4}>
    <Stack spacing={2} >
    <Card sx={{ maxWidth: 380 }} className="Cards">
    {/* <CardContent> */}
    <Stack spacing={2}  direction="row">
    <div className="icon">
       <StorefrontIcon/>
        </div>
        <div className="paddings">
        <span className="price_titel">$203K</span><br/>
        <span className="pricesub_titel">Total income</span>
        </div>
     </Stack>
        {/* </CardContent> */}
    </Card>

    <Card sx={{ maxWidth: 380 }}>
        {/* <CardContent> */}
        <Stack spacing={2}  direction="row">
        <div className="icons">
       <StorefrontIcon/>
        </div>
    
    <div className="paddings">
        <span className="price_titel">$203K</span><br/>
        <span className="pricesub_titel">Total income</span>
        </div>
        </Stack>
        {/* </CardContent> */}
    </Card>
    </Stack>
    </Grid>
    </Grid>
    

    <Box height={20}/>
    <Grid container spacing={2}>
    <Grid item xs={8}>
    <Card sx={{ height: 60 +"vh"}}>
        <CardContent>
        <Barchart/>
        </CardContent>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card sx={{ height: 60 +"vh"}}>
        <CardContent>
        <div className="paddings">
        <span className="pricesub_titel">Popular Products</span>
        </div>
       <Accordiondash/>
        </CardContent>
    </Card>
    </Grid>
    </Grid>
   </Box>
      </Box>
      </div>
   </>
  )
}

export default Home