import RecentBlogs from '@/components/recentBlogs/RecentBlogs'
import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
const Index = () => {
  
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url('/images/blogs.jpg')`,
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
              background: 'rgba(0, 255, 0, 0.3)', // Bluish background with transparency
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'center',
              textAlign: 'center',
              p: 6,
            }}
          >
            <Stack alignItems='start'>
              <Typography variant="h4" sx={{color:'white'}} gutterBottom>Our Blogs</Typography>
              <Typography variant="h6" sx={{color:'white'}}>Home / Blogs</Typography>
            </Stack>
          </Box>
      </Box>
      <RecentBlogs/>
    </div>
  )
}

export default Index
