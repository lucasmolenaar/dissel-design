import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

import ZD from '/images/logos/ZD.png';
import NE from '/images/logos/NE.png';
import MSP from '/images/logos/MSP.png';
import DTX from '/images/logos/DTX.png';
import I1608 from '/images/logos/16-08.png';
import MZ from '/images/logos/MZ.png';

const LogoSlider = () => {
  const logos = [ZD, NE, MSP, DTX, I1608, MZ];

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          1280: {
            spaceBetween: 24,
            slidesPerView: 4,
          },
          1920: {
            slidesPerView: 6,
          },
        }}
        modules={[Autoplay]}
        className='logoslider'
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img className={`img-${index}`} src={logo} alt={`Logo ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default LogoSlider;
