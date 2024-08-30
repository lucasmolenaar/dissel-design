import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { IoChevronBack } from 'react-icons/io5';
import { IoChevronForward } from 'react-icons/io5';

import Grid from '../layouts/Grid';
import cases from '../assets/data/cases.json';
import { Case } from '../types/Case';

interface PopupProps {
  setCaseOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

const CasePopup: React.FC<PopupProps> = ({ setCaseOpen, title }) => {
  const [selectedCase, setSelectedCase] = useState<Case | undefined>();
  const [typeColor, setTypeColor] = useState('#fafafa');
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const foundCase = cases.find(singleCase => singleCase.title === title);
    const color =
      foundCase?.type === 'UX-Research'
        ? '#58c556'
        : foundCase?.type === 'Design'
        ? '#1da4ff'
        : foundCase?.type === 'Development'
        ? '#743ecc'
        : '#fafafa';

    setSelectedCase(foundCase);
    setTypeColor(color);
  }, [selectedCase]);

  useEffect(() => {
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        setCaseOpen(false);
      }
    });
  }, []);

  return (
    <motion.div
      className='case-popup'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.3, delay: 0.4 },
      }}
    >
      <Grid>
        <div className='case-popup__container'>
          <motion.div
            className='case-popup__carousel'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'just', duration: 0.8, ease: 'easeOut' }}
            exit={{
              opacity: 0,
              y: 100,
              transition: { delay: 0.1, duration: 0.3 },
            }}
          >
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className='mySwiper'
              loop
              onSwiper={swiper => {
                swiperRef.current = swiper;
              }}
            >
              {selectedCase?.images.map((_, index) => (
                <SwiperSlide key={index}>Image {index + 1}</SwiperSlide>
              ))}
            </Swiper>

            <div className='case-popup__carousel-buttons'>
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <IoChevronBack color='#fafafa' size={24} />
              </button>

              <button onClick={() => swiperRef.current?.slideNext()}>
                <IoChevronForward color='#fafafa' size={24} />
              </button>
            </div>
          </motion.div>

          <motion.div
            className='case-popup__content'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'just',
              duration: 0.8,
              ease: 'easeOut',
              delay: 0.1,
            }}
            exit={{ opacity: 0, y: 100, transition: { duration: 0.3 } }}
          >
            <div className='case-popup__title'>{selectedCase?.title}</div>
            <a
              href={selectedCase?.link}
              target='_blank'
              className='case-popup__outlink'
            >
              <HiOutlineExternalLink size={20} />
            </a>
            <div
              className='case-popup__close'
              onClick={() => setCaseOpen(false)}
            >
              <IoClose size={24} />
            </div>

            <div className='case-popup__meta'>
              <div className='case-popup__meta-year'>
                <span>Jaar</span>
                <p>{selectedCase?.year}</p>
              </div>
              <div className='case-popup__meta-company'>
                <span>Bedrijf</span>
                <p>{selectedCase?.company}</p>
              </div>

              <div className='case-popup__meta-type'>
                <span>Type</span>
                <p
                  style={{
                    color: typeColor,
                    borderColor: typeColor,
                  }}
                >
                  {selectedCase?.type}
                </p>
              </div>
            </div>

            <div className='case-popup__overview'>
              <span className='case-popup__overview-title'>Omschrijving</span>
              <p className='case-popup__overview-text'>
                {selectedCase?.description}
              </p>
            </div>
          </motion.div>
        </div>
      </Grid>
    </motion.div>
  );
};

export default CasePopup;
