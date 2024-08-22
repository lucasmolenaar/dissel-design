interface CardProps {
  caseName: string;
  label: string;
}

const CaseCard: React.FC<CardProps> = ({ caseName, label }) => {
  return (
    <li className='case-card'>
      <div className='case-card__content'>
        <p className='case-card__content-title'>{caseName}</p>
        <p className='case-card__content-label'>{label}</p>
      </div>
    </li>
  );
};

export default CaseCard;
