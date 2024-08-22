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
}

const ProjectCard: React.FC<CardProps> = ({
  topTitle,
  year,
  large,
  bottomTitle,
  bottomSubtitle,
  ux,
  design,
  dev,
}) => {
  return (
    <div className='project-card'>
      <div className='project-card__top'>
        <p className='project-card__top-title'>{topTitle}</p>
        <p className='project-card__top-year'>{year}</p>
      </div>

      <div
        className={`project-card__bottom ${
          large ? 'project-card__bottom--big' : ''
        }`}
      >
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
