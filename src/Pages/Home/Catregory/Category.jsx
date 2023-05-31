import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import TitleSection from "../../../component/TitleSection/TitleSection";

const Category = () => {
        return (
                <section>
                        <TitleSection
                        subHeading={"From 11.00am to 10.00pm"}
                        heading={"order online"}
                        >
                           
                        </TitleSection>
                        <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h1 className="text-2xl font-serif uppercase text-center -mt-12 text-white">salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h1 className="text-2xl font-serif uppercase text-center -mt-12 text-white">soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h1 className="text-2xl font-serif uppercase text-center -mt-12 text-white">pizza</h1>
                </SwiperSlide>
                <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h1 className="text-2xl font-serif uppercase text-center -mt-12 text-white">dessert</h1>
                </SwiperSlide>
                <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h1 className="text-2xl font-serif uppercase text-center -mt-12 text-white">salad</h1>
                </SwiperSlide>
                 
              </Swiper>
                </section>
            
        );
};

export default Category;