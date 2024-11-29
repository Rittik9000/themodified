import React from 'react';
import {motion, useInView, useAnimation} from 'framer-motion'
interface props{
    children: JSX.Element;
    width:"fit-content"|"100%"
}
const Reveal = ({children, width="100%"}:props) => {
  return (
    <div style={{position:'relative', width:width, overflow:'hidden'}}>
      <motion.div
      variants={{
        hidden:{
            opacity:0,
            y:-75
        },
        visible:{
            opacity:1,
            y:0
        }
      }}
      initial={"hidden"}
      animate="visible"
      transition={{duration:0.5, delay:0.15}}
      >  
      {children}
      </motion.div>
    </div>
  )
}

export default Reveal
