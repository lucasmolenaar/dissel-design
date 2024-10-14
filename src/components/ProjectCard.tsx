import { useState } from 'react';
import useScreenWidth from '../hooks/useScreenWidth';

interface CardProps {
  topTitle: string;
  year: string;
  large?: boolean;
  image: string;
  bottomTitle: string;
  ux?: boolean;
  design?: boolean;
  dev?: boolean;
  color: string;
  link: string;
}

const ProjectCard: React.FC<CardProps> = ({
  topTitle,
  year,
  large,
  image,
  bottomTitle,
  ux,
  design,
  dev,
  color,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const screenwidth = useScreenWidth();

  return (
    <a
      href={link}
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
        <div className='project-card__bottom-overlay'></div>

        <div className='project-card__bottom-content'>
          <p className='project-card__bottom-title'>{bottomTitle}</p>

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
    </a>
  );
};

export default ProjectCard;
