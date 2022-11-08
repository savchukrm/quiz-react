import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink to="." end>
        Home
      </NavLink>
      <NavLink to="/html">html</NavLink>
      <NavLink to="/css">css</NavLink>
      <NavLink to="/js">js</NavLink>
      <NavLink to="/react">react</NavLink>
    </nav>
  );
};

export default Menu;
