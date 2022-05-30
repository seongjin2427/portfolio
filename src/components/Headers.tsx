import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';

const menuList = [
  {
    name: 'intro',
    text: 'Introduction',
  },
  {
    name: 'stack',
    text: 'Stack',
  },
  {
    name: 'projects',
    text: 'Projects',
  },
  {
    name: 'contact',
    text: 'Contact',
  },
];

function Headers() {
  return (
    <Wrapper>
      <Logo>
        <Link to="/main/intro">ITO</Link>
      </Logo>
      <Menus>
        {menuList.map((m) => (
          <Menu key={m.name}>
            <MenuLink to={'/main/' + m.name}>{m.text}</MenuLink>
          </Menu>
        ))}
      </Menus>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  left: 0;
  top: 0;
  display: flex;
  position: fixed;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 5rem;
  color: ${theme.colors.whiteblue};
  font-size: 1.2rem;
  font-weight: 700;
  background: ${theme.colors.deepblue};
  z-index: 2;

  a {
    text-decoration: none;
    color: ${theme.colors.whiteblue};
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  font-size: 2.5rem;
  position: absolute;
  left: 1.5rem;
  font-weight: 900;
  cursor: pointer;
`;

const Menus = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  cursor: pointer;
`;

const Menu = styled.li`
  margin-right: 40px;
`;

const MenuLink = styled(NavLink)`
  &::after {
    display: block;
    content: '';
    border-bottom: 3.5px solid ${theme.colors.whiteblue};
    transform: scaleX(0);
    transition: transform ease-in-out 0.2s;
    transform-origin: 0% 50%;
  }
  &:hover:after {
    transform: scaleX(1);
  }

  &.active {
    border-bottom: 3.5px solid ${theme.colors.whiteblue};
  }
`;

export default Headers;
