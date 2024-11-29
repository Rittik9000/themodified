import Departments from '@/components/departments/Departments'
import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
const index = () => {
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url('/images/departments.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "400px", lg: "400px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
         <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 255, 0.5)', // Bluish background with transparency
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'center',
              textAlign: 'center',
              p: 6,
            }}
          >
            <Stack alignItems='start'>
              <Typography variant="h4" sx={{color:'white'}} gutterBottom>Departments</Typography>
              <Typography variant="h6" sx={{color:'white'}}>Home / Departments</Typography>
            </Stack>
          </Box>
      </Box>
      <Departments/>
    </div>
  )
}

export default index
