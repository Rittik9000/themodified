import { Box, Button, Grid2, IconButton, Skeleton, Stack, Typography } from '@mui/material'
import React from 'react'

import { useAllBlogQuery } from '@/customHooks/cms.query.hooks';
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { blogContent, IAllBlogsResponse } from '@/typescript/cms.interface';
import { useRouter } from 'next/router';


function formatDateTime(dateTimeString: string): string {
  const date = new Date(dateTimeString); 
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const dateFormatter = new Intl.DateTimeFormat('en-US', options);
  const timeFormatter = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  const formattedDate = dateFormatter.format(date);
  const formattedTime = timeFormatter.format(date);
  const getDaySuffix = (day: number): string => {
    if (day > 3 && day < 21) return 'th'; 
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };
  const day = date.getDate();
  const [weekday, dayOfMonth, month, year] = formattedDate.split(' ');
  return `${formattedTime}  ,${day}${getDaySuffix(day)} ${dayOfMonth} ${year}`;
}
function replaceBackslashes(input: string): string {
  return input.replace(/\\/g, '//');
}
const Card = ({ card }: { card: blogContent}) => {
  
  function replaceBackslashes(input: string): string {
    return input.replace(/\\/g, '//');
  }

  
  const router = useRouter();
    return (
  
      <div
  
        key={card._id}
  
        className="group relative h-[400px] md:h-[600px] w-full overflow-hidden bg-neutral-200 rounded-xl"
       
      >
  
        <div
          
          style={{
  
            backgroundImage: `url(${`https://doctor-app-bp0m.onrender.com/${replaceBackslashes(card.image)}`})`,
  
            backgroundSize: "cover",
            backgroundPosition: "center",
            
          }}
          
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
          
        ></div>
  <AnimatePresence>
        <motion.div className="absolute inset-0 z-10 grid items-end" whileInView="hover" variants={{hover:{
           
        }}}>
  
          <div className="bg-gradient-to-br from-white/20 to-white/0 px-5 md:px-5 py-1 text-lg font-black uppercase text-green backdrop-brightness-50">
  
            <p className="text-sm text-white">{card.title}</p>
            <p className="text-xs text-blue-400">{formatDateTime(card.createdAt)}</p>
            {/* <p className="text-sm">{}</p> */}
           
            
            <motion.button 
            initial={{opacity:0, display:'none',y:75}}
            variants={{
            hover:{
              opacity:1,
              display:'inline',
              y:0
            },
            seen:{
              opacity:1,
              display:'inline',
              y:0,
              
            }
          }}
            transition={{
              delay:1,
              duration:0.55,
              ease:'easeOut'
            }}
             className="p-1 text-sm rounded outline outline-offset-2 m-2 outline-1 text-white"
             onClick={()=>{router.push(`/blogs/${card._id}`)}}
             >Read More</motion.button>
            
          </div>
  
        </motion.div>
        </AnimatePresence>
      </div>
  
    );
  
  };
const RecentBlogs:React.FC = () => {
  const {data:blogs, isLoading} = useAllBlogQuery();
  

  return (
    <Box sx={{py:2, background:'#f5f5f5', my:2, borderRadius:'13px', p:1}} >
      <Typography variant='h4' m={2} color='success' sx={{fontWeight:'bolder'}}>Blogs</Typography>
      
    {isLoading?(
      <Grid2 container width='100%' spacing={1}>
        <Grid2 size={{xs:12}} m={2}>
          <Skeleton height='300px'/>
          <Skeleton height='300px'/>
          <Skeleton height='300px'/>
        </Grid2>
      </Grid2>
  ):(
  <Grid2 container width='100%' rowSpacing={1} columnSpacing={1} alignItems='center' justifyContent='center'>
      {
        blogs?.data.map((item)=>{
          return(
            <Grid2 size={{xs:12, lg:6}} mx={0} key={item._id}>
              <Card card={item} />
          </Grid2>
          )
        })
      }
    </Grid2>
  )}

    </Box>
  )
}

export default RecentBlogs
