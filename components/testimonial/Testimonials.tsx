import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '@/styles/card.module.css';

// import required modules
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
const testimonialsData = [
    {
        review:"I had an excellent experience at Riverside Medical Center. The staff was so attentive, and the facilities were very clean. I had a minor procedure, and everything went smoothly. Special thanks to Dr. Taylor for making me feel comfortable throughout the process.",
        author:'James D. Wilson',
        id:'card1'
    },
    {
        review:"While the care at Summit Hospital was good, the waiting time was a bit long. However, once I was seen by Dr. Patel, I was impressed by the professionalism and expertise. The hospital is well-maintained, and the nurses are friendly.",
        author:'Hardy B.',
        id:'card2'
    },
    {
        review:"Nice environment &amp; good work life balance" ,
        author:'Nicolas Flammel',
        id:'card3'
    },
    {
        review:"Hands down, the best hospital experience I've ever had! The staff at Hillview Hospital is compassionate and kind. I felt like I was in good hands from start to finish. The rooms were comfortable, and I appreciated the follow-up care. Highly recommend!",
        author:'Harry Potter',
        id:'card4'
    },
    {
        review:"Unfortunately, my visit to Pinewood Medical Center wasn't as great as I expected. The doctors were knowledgeable, but the customer service from the reception staff could use some improvement. Overall, the care was decent, but I think they need to work on communication.",
        author:'Mohan H.',
        id:'card5'
    },
    {
        review:"The atmosphere was great and people were nice.",
        author:'Cardly Sines',
        id:'card6'
    },
    {
        review:"Had to take my son to Willow Creek Hospital after he sprained his ankle. The pediatric department was fantastic. They explained everything in a way he could understand and made him feel calm. The staff was also very caring and supportive.",
        author:'Ninonora Holes',
        id:'card7'
    },
    {
        review:"I went to Westfield General Hospital for a routine check-up, and while the doctor was great, the entire visit felt rushed. The nurses were nice, but I didn’t feel like they spent enough time answering my questions. The hospital itself was clean and well-organized, though.",
        author:'Docast Farm',
        id:'card8'
    },
    {
        review:"I had to undergo surgery at Meadowbrook Health and couldn’t be more pleased with the experience. The surgical team was professional, and the recovery staff made sure I was comfortable every step of the way. Highly recommend this hospital for any procedure.",
        author:'james d. wilson',
        id:'card9'
    },
]
export default function App() {
  return (
    <div style={{margin:'5px', padding:'10px'}} className='bg-lime-300'>
       <div className='text-3xl text-center my-4 font-bold text-emerald-800'>- What people Think About Us -</div>
      <Swiper
        
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={0}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            
          },
        }}
        scrollbar={false}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Navigation, Pagination]}
        className="mySwiper"
        style={{height:'60vh'}}
        
      >
        {
            testimonialsData.map((card)=>{
                return(
                    
                    <SwiperSlide key={card.id} style={{paddingLeft:'20px', paddingRight:'20px'}}>
                        <div className="w-full h-full"
                        style={{
                            background:`url('/images/testimonialBg.jpg') rgba(0,0,0,0.5)`,
                            backgroundPosition:'center',
                            backgroundSize:'cover',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            paddingLeft:'20%',
                            paddingRight:'20%',
                            borderRadius:'13px',
                            flexDirection:'column'
                        }}
                        >
                            <div className='text-white'>{card.review}</div>
                            <div className="text-blue-800 text-end translate-x-[40px] mt-4">~{card.author}</div>
                        </div>
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
    </div>
  );
}
