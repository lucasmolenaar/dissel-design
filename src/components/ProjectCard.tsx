import { useState } from 'react';
import useScreenWidth from '../hooks/useScreenWidth';

interface CardProps {
  topTitle: string;
  year: string;
  large?: boolean;
  image: string;
  bottomTitle: string;
  bottomSubtitle: string;
  ux?: boolean;
  design?: boolean;
  dev?: boolean;
  color: string;
}

const ProjectCard: React.FC<CardProps> = ({
  topTitle,
  year,
  large,
  image,
  bottomTitle,
  bottomSubtitle,
  ux,
  design,
  dev,
  color,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const screenwidth = useScreenWidth();

  return (
    <div
      className='project-card'
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div
        className='project-card__top'
        style={{
          backgroundColor: isHovered || screenwidth < 1024 ? color : '',
        }}
      >
        <p className='project-card__top-title'>{topTitle}</p>
        <p className='project-card__top-year'>{year}</p>
      </div>

      <div
        className={`project-card__bottom ${
          large ? 'project-card__bottom--big' : ''
        }`}
        // style={{ backgroundImage: `url(${image})` }}
      >
        <img src={image} alt='Project image' />
        <div className='project-card__bottom-content'>
          <p className='project-card__bottom-title'>{bottomTitle}</p>
          <p className='project-card__bottom-subtitle'>{bottomSubtitle}</p>

          <div className='project-card__bottom-labels'>
            {ux && (
              <span className='project-card__bottom-label project-card__bottom-label--ux'>
                UX-Research
              </span>
            )}

            {design && (
              <span className='project-card__bottom-label project-card__bottom-label--design'>
                Design
              </span>
            )}

            {dev && (
              <span className='project-card__bottom-label project-card__bottom-label--dev'>
                Development
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
