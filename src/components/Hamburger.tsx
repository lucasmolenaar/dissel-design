interface BurgerProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger: React.FC<BurgerProps> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`nav-icon-5 ${menuOpen ? 'open' : ''}`}
      onClick={() => setMenuOpen(prev => !prev)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
