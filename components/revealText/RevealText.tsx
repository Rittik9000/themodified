import React, { useEffect, useRef } from 'react';
import {motion, useInView, useAnimation} from 'framer-motion'
interface props{
    children: JSX.Element;
    width:"fit-content"|"100%"
}
const RevealText = ({children, width='fit-content'}:props) => {
    const ref = useRef(null);
    const inInView = useInView(ref, {once:true});
    const maincontrols = useAnimation();
    const slideControls = useAnimation();
    useEffect(()=>{
        if(inInView){
            maincontrols.start("visible");
            slideControls.start("visible");
        }
    },[inInView, maincontrols, slideControls])
  return (
    <div ref={ref} style={{position:'relative', width:width, overflow:'hidden'}}>
      <motion.div
      variants={{
        hidden:{
            opacity:0,
            y:75
        },
        visible:{
            opacity:1,
            y:0
        }
      }}
      initial={"hidden"}
      animate={maincontrols}
      transition={{duration:0.5, delay:0.35}}
      >  
      {children}
      </motion.div>
      <motion.div
      variants={{
        hidden:{
            left:0,
        },
        visible:{
            left:"100%"
        }
      }}
      initial="hidden"
      animate={slideControls}
      style={{
        position:"absolute",
        top:4,
        bottom:4,
        left:0,
        right:0,
        background:'#8A9A5B'
      }}
      transition={{duration:0.5, ease:'easeIn'}}
      />
    </div>
  )
}

export default RevealText;
