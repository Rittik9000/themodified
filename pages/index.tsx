
import { Inter } from "next/font/google";
import RevealText from "@/components/revealText/RevealText";
import Carousel from "@/components/carousel/Carousel";
import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import ScrollingText from "@/components/updates/UpdateLog";
import Image from "next/image";
import VerticalAccordion from "@/components/verticalaccordion/VerticalAccordion";
import HorizontalScrollCarousel from "@/components/doctors/Doctors";
import Departments from "@/components/departments/Departments";
import RecentBlogs from "@/components/recentBlogs/RecentBlogs";
import SuccessStories from "@/components/success/SuccessStories";
import Testimonials from "@/components/testimonial/Testimonials";
import { ContactRedirecter } from "@/components/contectHome/ContactRedirecter";
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ["latin"] });
const steps = [
  {imgSrc:"/images/firstStep.jpg", heading:'Online appointment', text:'access healthcare easily with our online booking'},
  {imgSrc:"/images/teleconsultation.jpg", heading:'Heavy teleconsultation', text:'consult easily with our healthcare experts easily'},
  {imgSrc:"/images/thirdStep.jpeg", heading:'Bill enquiry and payment', text:'simplyfy health care with online payments'},
  {imgSrc:"/images/fourthStep.jpg", heading:'Reports download', text:'Get your investigation reports with only one click'}
]
export default function Home() {

  const router = useRouter();
  return (
    <>

    {/*carousel section*/}
    <Carousel/>

    {/*Updates section*/}
     <Stack direction='row'>
      <Box sx={{p:{xs:1, lg:2}, background:'#355E3B', color:'white'}}>
        <Typography variant="h6" sx={{fontSize:{xs:'13px', lg:'16px'}}}>UPDATES</Typography>
      </Box>
      <ScrollingText/>
     </Stack>

    {/*the appointment button*/}
      <Button variant="contained" sx={{position:'fixed',zIndex:'999', bottom:{xs:0, lg:12}, width:{xs:'100%', lg:'fit-content'} ,right:{xs:0, lg:12}, background:'#014421'}} onClick={()=>{router.push(('/appointment'))}}>Get An Appointment</Button>


     {/*steps section*/} 
     <Box p={{lg:2, xs:1}} sx={{background:'#E4FDE1',m:{xs:1,lg:2}, borderRadius:'13px'}}>
      <RevealText width="fit-content"><Typography variant="h5" sx={{color:'green'}}>Easy Steps</Typography></RevealText>
      <Grid2 container spacing={2} m={{xs:2, lg:0}} alignItems='center' justifyContent='center'>
        {
          steps.map((item,idx)=>{
            return(
              <Grid2  className="relative md:relative  rounded-xl dark:bg-lime-600 outline-2 divide-y bg-lime-200 border-lime-600"  size={{xs:6, lg:2}} p={3} display='flex' alignItems='center' justifyContent='center' flexDirection='column' key={item.heading} sx={{ transition: 'transform 0.3s ease-in-out','&:hover':{transform: 'scale(1.05)'}}}>
                <div className="rounded-full ring px-2 translate-x-[-10px] translate-y-[-10px] text-white md:p-2 md:px-4 absolute top-0 left-0 z-10 box-border bg-lime-800 shadow-xl self-start">{idx+1}</div>
                <RevealText width="fit-content"><Image className="w-45 h-34 md:w-64 md:h-56 abso md:rounded-xl rounded-xl mx-auto" src={item.imgSrc} alt="" width="150" height="200"/></RevealText>
                <RevealText width="fit-content"><Typography variant="h6" sx={{color:'green', textAlign:'center',fontSize:{xs:'12px', lg:'20px'}}}>{item.heading}</Typography></RevealText>
                <RevealText width="fit-content"><Typography variant="body2" sx={{color:'gray', textAlign:'center', fontSize:{xs:'9px', lg:'14px'}}}>{item.text}</Typography></RevealText>
            </Grid2>
            )
          })
        }
      </Grid2>
      </Box>

      {/*about us section*/}
      <VerticalAccordion/>

      {/* featured doctors section */}

      <HorizontalScrollCarousel/>

      {/* confidence section */}
        <SuccessStories/>

        
      {/* departments  section */}
      <Departments/>
      {/*testimonials*/}
      <Testimonials/>
      <RecentBlogs/>
      <ContactRedirecter/>
    </>
  );
}
