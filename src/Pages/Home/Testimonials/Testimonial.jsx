 
import TitleSection from '../../../component/TitleSection/TitleSection';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
        const [reviews, setReviews] = useState([]);
        useEffect( () => {
                fetch('http://localhost:5000/reviews')
                .then(res => res.json())
                .then(data => setReviews(data))
        } ,[])
        return (
                <div>
                        <section>
                        <TitleSection
                        subHeading={'What Our Clients'}
                        heading={'Testimonials'}
                        ></TitleSection>
                        


        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
         {
                 reviews.map(item =>  
                          <SwiperSlide
                          key={item._id}
                          >
                           <div className=' mx-20  flex flex-col items-center'>
                           <Rating 
                                style={{ maxWidth: 180,textAlign:'center' }}
                                value={item.rating}
                                
                                />

                              <p className='mt-12'>{item.details}</p>  
                              <h1 className='text-orange-400 text-2xl font-bold'>{item.name}</h1>
                           </div>
                             
                          </SwiperSlide>
                 

                )
         }
      </Swiper>
                        </section>
                </div>
        );
};

export default Testimonial;