import { useState } from 'react';
import useScreenWidth from '../hooks/useScreenWidth';
import ListItem from '/svg/list-item.svg';

interface CardProps {
  title: string;
  icon: string;
  text: string;
  items: string[];
  bgColor: string;
}

const ServiceCard: React.FC<CardProps> = ({
  title,
  icon,
  text,
  items,
  bgColor,
}) => {
  const screenwidth = useScreenWidth();
  const [backgroundColor, setBackgroundColor] = useState<string>('');
  const [listHeight, setListHeight] = useState<'auto' | number>(0);

  const handleMouseOver = () => {
    setBackgroundColor(bgColor);
    setListHeight(180);
  };

  const handleMouseOut = () => {
    setBackgroundColor('');
    setListHeight(0);
  };
  return (
    <div
      className='service-card'
      style={{
        backgroundColor: screenwidth < 1024 ? bgColor : backgroundColor,
        borderColor: backgroundColor,
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className='service-card__top'>
        {/* <img src={icon} alt={`${title} - icon`} /> */}
        {icon}
        <h3>{title}</h3>
      </div>

      <p className='service-card__text'>{text}</p>

      <ul style={{ height: screenwidth < 1024 ? '' : listHeight }}>
        {items.map((item, index) => (
          <li key={index}>
            <img src={ListItem} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
