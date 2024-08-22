interface TitleProps {
  title: string;
  title2?: string;
  side: 'left' | 'right';
  about?: boolean;
}

const SectionTitle: React.FC<TitleProps> = ({ title, title2, side, about }) => {
  return (
    <div
      className={`section-title__container ${
        side === 'right' ? 'textright' : ''
      }`}
    >
      <h2 className={`section-title ${about ? 'section-title--about' : ''}`}>
        {title}{' '}
        {title2 && (
          <div className='section-title__italic'>
            {title2} <span>{title2}</span>
          </div>
        )}
        <span>{title}</span>
      </h2>

      <div className='section-title__line'></div>
    </div>
  );
};

export default SectionTitle;
