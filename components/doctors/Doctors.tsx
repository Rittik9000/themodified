import { useGetFeaturedDoctorQuery } from "@/customHooks/cms.query.hooks";
import { doctorDetails, IFeaturedDoctorResponse } from "@/typescript/cms.interface";
import { Box, Button, Typography } from "@mui/material";
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import DoctorDetails from "../doctorDetails/DoctorDetails";
import RevealText from "../revealText/RevealText";
import { useRouter } from "next/router";




const Card = ({ card,setOpen }: { card: doctorDetails, setOpen: Function }) => {
  
  function replaceBackslashes(input: string): string {
    return input.replace(/\\/g, '//');
  }

  const router = useRouter();
  
    return (
  
      <div
  
        key={card._id}
  
        className="group relative h-[470px] w-[360px] overflow-hidden bg-neutral-200 rounded-xl"
       
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
  
          <div className="bg-gradient-to-br from-white/20 to-white/0 px-5 py-1 text-6xl font-black uppercase text-green backdrop-blur-lg ">
  
            <RevealText width="fit-content"><p className="text-xl">{card.name}</p></RevealText>
            <RevealText width="fit-content"><p className="text-sm text-blue-600">{card.department_details?.[0].departmentName}</p></RevealText>
            <RevealText width="fit-content"><p className="text-sm">{`Time: ${card.aperture_time} - ${card.departure_time}`}</p></RevealText>
           
            
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
              delay:0.15,
              duration:0.25,
              ease:'easeOut'
            }}
            onClick={() => setOpen(card._id)}
             className="p-1 text-sm rounded outline outline-offset-2 mb-2 outline-1 mr-4"
             >See Details</motion.button>


            <motion.button 
            initial={{opacity:0, display:'none',y:75}}
            variants={{
            hover:{
              opacity:1,
              display:'inline',
              y:0
            }
          }}
            transition={{
              
             

            }}
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95, rotateY:'180deg'}}
            className="p-2 text-white text-sm rounded mb-2 bg-emerald-500 fill outline-1"
            onClick={()=>{router.push(`/appointment/${card._id}`)}}
            >Take an appointment</motion.button>
            
          </div>
  
        </motion.div>
        </AnimatePresence>
      </div>
  
    );
  
  };
const HorizontalScrollCarousel = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const handleOpen = (doctor: any) => {
    setSelectedDoctor(doctor);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({

    target: targetRef,

  });

  const {data:featuredDoctors, isLoading:dataIsLoading} = useGetFeaturedDoctorQuery();
  console.log(featuredDoctors);
  
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);


  return (

    <section ref={targetRef} className="relative h-[300vh] bg-lime-100">
      

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
     <Typography sx={{m:1, p:2, alignSelf:'flex-start', color:'green'}} variant="h4">Featured</Typography>
      
        {dataIsLoading?(
          <Box sx={{height:"100%", width:"100%", display:'flex', alignItems:'center', justifyContent:"center"}}>
            <p>LOADING...</p>
          </Box>
        ):(<motion.div style={{ x }} className="flex gap-4">

          {featuredDoctors?.data?.map((doctor) => {

            return <Card card={doctor} setOpen={handleOpen} key={doctor._id} />;

          })}

        </motion.div>)}

      </div>
      {selectedDoctor && (
        <DoctorDetails
          open={open}
          handleClose={handleClose}
          doctor={selectedDoctor}
        />
      )}
    </section>
  )
}
export default HorizontalScrollCarousel;


type CardType = {

  url: string;

  title: string;

  id: number;

};


