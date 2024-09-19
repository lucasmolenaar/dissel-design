import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

const ProjectSlider = () => {
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
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1280: {
            spaceBetween: 24,
            slidesPerView: 3.2,
          },
        }}
        modules={[Pagination]}
        className='projectslider'
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProjectSlider;
