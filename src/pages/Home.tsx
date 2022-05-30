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
      <MainGlassCard>
        <Title>
          This is Portfolio of
          <br />
          <Name convert={convert} onMouseEnter={onMouseOver}>
            {name}
          </Name>
          <Link to="/main/intro">
            <Name convert={!convert} onMouseLeave={onMouseLeave}>
              {name}
            </Name>
          </Link>
        </Title>
      </MainGlassCard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${theme.common.flexCenter}
  width: 100%;
  min-height: 100vh;
`;

const MainGlassCard = styled.div`
  ${theme.common.flexCenter}
  width: 800px;
  height: 500px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(11px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Title = styled.div`
  text-align: center;
  font-family: 'Recursive';
  font-weight: 900;
  font-size: 70px;
  color: ${theme.colors.deepblue};

  a {
    text-decoration: none;
    color: ${theme.colors.deepblue};
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
    border-bottom: 10px solid ${theme.colors.deepblue};
    transform: scaleX(0) translateY(-10px);
    transition: transform 0.4s ease-in-out;
    transform-origin: 0% 50%;
  }

  &:hover:after {
    transform: scaleX(1) translateY(-10px);
  }
`;

export default Home;
