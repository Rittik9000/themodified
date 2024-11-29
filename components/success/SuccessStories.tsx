import React from 'react'
import RevealDiv from '../revealDiv/RevealDiv'

const SuccessStories = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 p-1 md:p-3 bg-lime-200 m-1 md:m-4 rounded'>
      <RevealDiv width='100%'><div
      className='w-full h-[200px] md:h-[400px] rounded'
      style={{
        backgroundImage:`url(${'/images/award1.jpg'})`,
        
   
      }}
      ></div>
      </RevealDiv>
      <RevealDiv width='100%'><div
      className='w-full h-[200px] md:h-[400px] rounded'
      style={{
        backgroundImage:`url(${'/images/award2.webp'})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
      }}
      ></div>
      </RevealDiv>
      <RevealDiv width='100%'><div
      className='w-full h-[200px] md:h-[400px] rounded'
      style={{
        backgroundImage:`url(${'/images/award3.jpg'})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
      }}
      ></div></RevealDiv>
      <div className='flex w-auto align-center rouneded-lg justify-center h-full'><p className=" box-decoration-slice bg-gradient-to-r from-lime-600 to-blue-500 text-white p-5  text-3xl font-mono uppercase text-balence break-keep text-wrap  text-center my-auto">Our Success<br/> Stories</p></div>
      

      {/* sections */}
      <div
      className='grid grid-cols-2 gap-2'
      >
         <RevealDiv width='100%'><div
      className='w-full h-[200px] rounded'
      style={{
        backgroundImage:`url(${'/images/show1.png'})`,
        backgroundSize: "contain",
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center'
      }}
      ></div></RevealDiv>
       <RevealDiv width='100%'><div
      className='w-full h-[200px] rounded'
      style={{
        backgroundImage:`url(${'/images/show2.png'})`,
        backgroundSize: "contain",
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center'
      }}
      ></div></RevealDiv>
       <RevealDiv width='100%'><div
      className='w-full h-[200px] rounded'
      style={{
        backgroundImage:`url(${'/images/show3.png'})`,
        backgroundSize: "contain",
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center'
      }}
      ></div></RevealDiv>
      <RevealDiv width='100%'><div
      className='w-full h-[200px] rounded'
      style={{
        backgroundImage:`url(${'/images/show4.png'})`,
        backgroundSize: "contain",
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center'
      }}
      ></div></RevealDiv>
      </div>
      <RevealDiv width='100%'><div
      className='w-full h-[200px] md:h-[400px] rounded'
      style={{
        backgroundImage:`url(${'/images/award4.jpg'})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
      }}
      ></div></RevealDiv>
      <RevealDiv width='100%'><div
      className='w-full h-[200px] md:h-[400px] rounded'
      style={{
        backgroundImage:`url(${'/images/award5.jpg'})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
      }}
      ></div></RevealDiv>
      <RevealDiv width='100%'><div
      className='w-full h-[200px] md:h-[400px] rounded'
      style={{
        backgroundImage:`url(${'/images/award6.jpg'})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
      }}
      ></div></RevealDiv>
      <RevealDiv width='100%'><div
      className='w-full h-[200px] md:h-[400px] rounded'
      style={{
        backgroundImage:`url(${'/images/award7.webp'})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
      }}
      ></div></RevealDiv>
      
    </div>
  )
}

export default SuccessStories
