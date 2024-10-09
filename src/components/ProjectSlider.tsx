import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';

interface SliderProps {
  images: string[];
}

const ProjectSlider: React.FC<SliderProps> = ({ images }) => {
  return (
    <>
      <Swiper
        slidesPerView={1.1}
        spaceBetween={12}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1280: {
            spaceBetween: 24,
            slidesPerView: 3.2,
          },
        }}
        modules={[Pagination, Autoplay]}
        className='projectslider'
      >
        {images.map((image: string, index: number) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Image ${index}`} />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default ProjectSlider;
