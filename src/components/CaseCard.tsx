interface CardProps {
  caseName: string;
  label: string;
  image: string;
}

const CaseCard: React.FC<CardProps> = ({ caseName, label, image }) => {
  return (
    <li className='case-card'>
      <img src={image} alt='Case image' />

      <div className='case-card__content'>
        <p className='case-card__content-title'>{caseName}</p>
        <p className='case-card__content-label'>{label}</p>
      </div>
    </li>
  );
};

export default CaseCard;
