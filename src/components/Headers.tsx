import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../styles/theme';

function Headers() {
  return (
    <Wrapper>
      <Logo>
        <span>ITO</span>
      </Logo>
      <Menus>
        <Menu>Introduction</Menu>
        <Menu>Stack</Menu>
        <Menu>Project</Menu>
        <Menu>Contect</Menu>
      </Menus>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  color: ${theme.colors.yellow};
  font-size: 1.2rem;
  font-weight: 700;
  background: ${theme.colors.red};
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
  margin-right: 30px;

  &::after {
    display: block;
    content: '';
    border-bottom: 3.5px solid ${theme.colors.yellow};
    transform: scaleX(0);
    transition: transform ease-in-out 0.2s;
    transform-origin: 0% 50%;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

export default Headers;
