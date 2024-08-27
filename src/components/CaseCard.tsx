import { useEffect, useState } from 'react';
import CasePopup from './CasePopup';
import { AnimatePresence } from 'framer-motion';

interface CardProps {
  caseName: string;
  label: string;
  image: string;
}

const CaseCard: React.FC<CardProps> = ({ caseName, label, image }) => {
  const [caseOpen, setCaseOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = caseOpen ? 'hidden' : 'visible';
  }, [caseOpen]);

  return (
    <>
      <li className='case-card' onClick={() => setCaseOpen(true)}>
        <img src={image} alt='Case image' />

        <div className='case-card__content'>
          <p className='case-card__content-title'>{caseName}</p>
          <p className='case-card__content-label'>{label}</p>
        </div>
      </li>

      <AnimatePresence>
        {caseOpen && <CasePopup setCaseOpen={setCaseOpen} title={caseName} />}
      </AnimatePresence>
    </>
  );
};

export default CaseCard;
