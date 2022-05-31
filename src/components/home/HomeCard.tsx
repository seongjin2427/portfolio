import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { fadeIn, fadeOut, twinkle } from '../../styles/animation';
import theme from '../../styles/theme';

type Props = {
  convert: boolean;
};

function HomeCard() {
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
    <MainGlassCard>
      <Title>
        The Portfolio of
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
  );
}

const MainGlassCard = styled.div`
  ${theme.common.flexCenter}
  width: 50rem;
  height: 30rem;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    width: 20rem;
    height: 13.5rem;
  }
`;

const Title = styled.div`
  text-align: center;
  font-family: 'Recursive';
  font-weight: 900;
  font-size: 70px;
  text-shadow: 2px 2px 10px rgba(255, 255, 255, 1);
  color: ${theme.colors.deepblue};

  @media (max-width: 768px) {
    font-size: 2rem;
  }

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

  /* animation-duration: 1s, 3s;
  animation-timing-function: ease-out, ease-in-out; */
  animation: ${fadeIn} 1s ease-out, ${twinkle} 8s infinite;
  /* animation-iteration-count: inherit, infinite; */
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
    box-shadow: 2px 2px 10px rgba(255, 255, 255, 1);
    transform: scaleX(0) translateY(0px);
    transition: transform 0.4s ease-in-out;
    transform-origin: 0% 50%;
  }

  &:hover:after {
    transform: scaleX(1) translateY(0px);
  }
`;

export default HomeCard;
