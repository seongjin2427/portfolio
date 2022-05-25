import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { fadeIn, fadeOut } from '../styles/animation';
import theme from '../styles/theme';

type Props = {
  convert: boolean;
};

function Home() {
  const realName = 'S E O N G  J I N';
  const nickName = 'I T O';
  const [name, setName] = useState(realName);
  const [convert, setConvert] = useState(false);

  const onMouseOver = (): void => {
    setConvert(true);
    setName(nickName);
  };

  const onMouseLeave = (): void => {
    setConvert(false);
    setName(realName);
  };

  return (
    <Wrapper>
      <Title>
        This is Portfolio of
        <br />
        <Name convert={convert} onMouseEnter={onMouseOver}>
          {name}
        </Name>
        <Link to="/intro">
          <Name convert={!convert} onMouseLeave={onMouseLeave}>
            {name}
          </Name>
        </Link>
      </Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${theme.common.flexCenter}
  width: 100%;
  min-height: 100vh;
`;

const Title = styled.div`
  text-align: center;
  font-family: 'Recursive';
  font-weight: 900;
  font-size: 70px;
  color: #f8cb2e;

  a {
    text-decoration: none;
    color: #f8cb2e;
  }

  @media screen and (max-width: 375px) {
    font-size: 30px;
  }

  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const Name = styled.span<Props>`
  width: 700px;
  display: inline-block;
  text-transform: uppercase;
  transition: all 1s;

  @media screen and (max-width: 375px) {
    width: 300px;
  }

  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  ${(props) =>
    props.convert &&
    css`
      display: none;
      animation-name: ${fadeOut};
    `}

  &:hover {
    cursor: pointer;
  }

  &:after {
    display: block;
    content: '';
    border-bottom: 10px solid #f8cb2e;
    transform: scaleX(0) translateY(-10px);
    transition: transform 0.4s ease-in-out;
    transform-origin: 0% 50%;
  }

  &:hover:after {
    transform: scaleX(1) translateY(-10px);
  }
`;

export default Home;
