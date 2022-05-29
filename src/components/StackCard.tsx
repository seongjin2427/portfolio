import { useState } from 'react';
import styled, { css } from 'styled-components';
import theme from '../styles/theme';
import { turnover, reTurnover } from '../styles/animation';

type Props = {
  data: {
    src: string;
    name: string;
    text?: string;
  };
};

type CardProps = {
  fliped: boolean;
};

function StackCard({ data }: Props) {
  const { src, name, text } = data;
  const [fliped, setFlipped] = useState(false);

  const onClick = () => {
    setFlipped(!fliped);
  };

  return (
    <Card onClick={onClick} fliped={fliped}>
      <img className="front" src={src} alt="sample" />
      <p className="back">
        <span>
          <b>{name}</b>
        </span>
        <br />
        <span>{text}</span>
      </p>
    </Card>
  );
}

const Card = styled.div<CardProps>`
  ${theme.common.flexCenter}
  width: 15rem;
  height: 15rem;
  position: relative;
  padding: 25px;
  margin: 20px;
  transition: all 0.2s;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-10px);
  }

  img,
  p {
    font-size: 20px;
    width: 15rem;
    height: 15rem;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    padding: 25px;
    border: 2px solid ${theme.colors.blue};
    background: ${theme.colors.whiteblue};
    border-radius: 25px;
  }

  img {
    object-fit: contain;
    ${(props): any =>
      props.fliped
        ? css`
            animation: ${turnover} 0.5s 1 forwards;
            transform: translateY(-10px);
          `
        : css`
            animation: ${reTurnover} 0.5s 1 forwards;
            animation-delay: 0.5s;
            transform: rotateY(-90deg) translateY(-10px);
          `}
  }

  span:first-child {
    font-size: 30px;
  }
  p {
    overflow: scroll;
    transform: rotateY(-90deg);
    word-break: keep-all;
    ${(props): any =>
      props.fliped
        ? css`
            animation: ${reTurnover} 0.5s 1 forwards;
            animation-delay: 0.5s;
            transform: rotateY(-90deg) translateY(-10px);
          `
        : css`
            animation: ${turnover} 0.5s 1 forwards;
            transform: translateY(-10px);
          `}
  }
`;

export default StackCard;
