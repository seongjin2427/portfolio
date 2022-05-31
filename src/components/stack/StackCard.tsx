import { useState } from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import { turnover, reTurnover } from '../../styles/animation';

type Props = {
  data: {
    src: string;
    name: string;
    text?: string;
  };
  size: number;
};

type CardProps = {
  fliped: boolean;
  size: number;
};

function StackCard({ data, size }: Props) {
  const { src, name, text } = data;
  const [fliped, setFlipped] = useState(false);

  const onClick = () => {
    setFlipped(!fliped);
  };

  return (
    <Card onClick={onClick} fliped={fliped} size={size}>
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

  // 카드 가로세로 크기
  ${({ size }) => css`
    width: ${size}rem;
    height: ${size}rem;
  `}

  position: relative;
  padding: 25px;
  margin: 20px;
  transition: all 0.2s;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-10px);
  }

  span:first-child {
    font-size: 30px;
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

    border-radius: 25px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 20px 0 rgba(31, 38, 135, 0.3);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
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

  p {
    overflow: scroll;
    transform: rotateY(-90deg);
    word-break: keep-all;
    background: ${theme.colors.deepblue};
    color: ${theme.colors.whiteblue};
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
          `};
  }
`;

export default StackCard;
