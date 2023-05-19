import React from 'react'
import Sidenavbar from '../components/sidenavbar'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import GeoChart from '../charts/GeoChart';
import { PieChart } from '../charts/PieChart';
import { BrChart } from '../charts/BrChart';
import CountUp from 'react-countup';


function Analytics() {
  return (
   <>
   <div className="bgcolor">
     <Navbar/>
   <Box height={70}/>
   <Box sx={{ display: 'flex' }}>
    <Sidenavbar/>
    
   <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
   <Grid container spacing={2}>
    <Grid item xs={5}>
    <Stack spacing={2} direction="row">
    
    <Box>
    <Card className="Card" sx={{minWidth: 120 ,  height:19+"vh" }}  >
        <CardContent >
          <Typography gutterBottom variant="p" component="div" sx={{color:"#f0fcfc", padding:"7px 0px"}}>
              Visitors
          </Typography>

          <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}} >
            <CountUp delay={0.2} end={22000} duration={0.5}/>
          </Typography>
          <Typography gutterBottom variant="p" component="div" sx={{color:"white"}}>
              scince last week
          </Typography>
        </CardContent>
    </Card>

    <Card className="Cards" sx={{minWidth: 120 ,  height:19+"vh"  , marginTop:"16px" }}  >
        <CardContent >
          <Typography gutterBottom variant="p" component="div" sx={{color:"#f0fcfc", padding:"7px 0px"}}>
              Visitors
          </Typography>

          <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}} >
          <CountUp delay={0.2} end={35000} duration={0.5}/>
            
          </Typography>
          <Typography gutterBottom variant="p" component="div" sx={{color:"white"}}>
              scince last week
          </Typography>
        </CardContent>
    </Card>
    </Box>

    <Box sx={{widows:"50%", height:"50%"}}>
    <Card className="Cards" sx={{minWidth: 120 , height:19+"vh"}}  >
        <CardContent >
          <Typography gutterBottom variant="p" component="div" sx={{color:"#f0fcfc", padding:"7px 0px"}}>
              Visitors
          </Typography>

          <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}} >
          <CountUp delay={0.2} end={86000} duration={0.5}/>

          </Typography>
          <Typography gutterBottom variant="p" component="div" sx={{color:"white"}}>
              scince last week
          </Typography>
        </CardContent>
    </Card>

    <Card className="Card" sx={{minWidth: 120 ,  height:19+"vh" , marginTop:"16px"}}  >
        <CardContent >
          <Typography gutterBottom variant="p" component="div" sx={{color:"#f0fcfc", padding:"7px 0px"}}>
              Visitors
          </Typography>

          <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}} >
          <CountUp delay={0.2} end={2324000} duration={0.5}/>
          
          </Typography>
          <Typography gutterBottom variant="p" component="div" sx={{color:"white"}}>
              scince last week
          </Typography>
        </CardContent>
    </Card>
    </Box>
    </Stack>
    </Grid>
  

   

 
   

    <Grid item xs={7}>
    <Card sx={{ height: 40 +"vh"}}>
        <CardContent>
        <BrChart/>
        </CardContent>
    </Card>
    </Grid>

    </Grid>

  <Box height={16} sx={{marginTop:"20px"}}>
  <Grid container spacing={2}>
  <Grid item xs={8}>
    <Card sx={{ height: 40 +"vh"}}>
        <CardContent>
        <GeoChart/>
        </CardContent>
    </Card>
    </Grid>

    <Grid item xs={4}>
    <Card sx={{ height: 40 +"vh"}}>
        <CardContent>
        <PieChart/>
        </CardContent>
    </Card>
    </Grid>
    </Grid>
  </Box>

      </Box>
      </Box>
      </div>
    
   </>
  )
}

export default Analytics;