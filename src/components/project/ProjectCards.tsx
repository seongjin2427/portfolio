import { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

import { DataProps } from '../../assets/projects';

import { floating2 } from '../../styles/animation';
import theme from '../../styles/theme';

type Props = {
  duration: number;
  data: DataProps;
  projectName: string;
  spendTime: string;
  iconSet: string[];
};

type ContainerProps = {
  duration: number;
};

type PanelImgProps = {
  page: number;
  maxLength: number;
};

function ProjectCards({ duration, data, projectName, spendTime, iconSet }: Props) {
  const [num, setNum] = useState(0);
  const { id, title, desc } = data[num];

  const onPrevious = useCallback(() => {
    if (num !== 0) {
      const nextNum = num - 1;
      setNum(nextNum);
    }
  }, [num]);

  const onNext = useCallback(() => {
    if (num !== data.length - 1) {
      const nextNum = num + 1;
      setNum(nextNum);
    }
  }, [data.length, num]);

  return (
    <GlassContainer duration={duration}>
      <LeftDiv>
        <video autoPlay muted loop key={id}>
          <source src={require(`../../assets/video/${projectName}/${num + 1}.mp4`)} />
        </video>
        <Panels>
          <PanelImg
            maxLength={data.length - 1}
            page={num}
            onClick={onPrevious}
            src="https://uxwing.com/wp-content/themes/uxwing/download/02-arrow-direction/next.png"
            alt="previous"
          />
          <PanelImg
            maxLength={data.length - 1}
            page={num}
            onClick={onNext}
            src="https://uxwing.com/wp-content/themes/uxwing/download/02-arrow-direction/next.png"
            alt="next"
          />
        </Panels>
      </LeftDiv>
      <RightDiv>
        <ProjectName>
          {projectName}
          {iconSet.map((src) => (
            <img src={src} alt="icon" key={src} />
          ))}
        </ProjectName>
        <SpendTime>{spendTime}</SpendTime>
        <hr />
        <Title>{title}</Title>
        <DescUl>
          {desc.map((li) => (
            <DescLi key={li}>- {li}</DescLi>
          ))}
        </DescUl>
      </RightDiv>
    </GlassContainer>
  );
}

const GlassContainer = styled.div<ContainerProps>`
  ${theme.common.flexCenter};
  width: 70rem;
  height: 32.5rem;
  margin-top: 6rem;
  padding: 5rem;

  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  font-family: 'Black Han Sans';
  font-size: 1.75rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 1);

  ${(props) =>
    css`
      animation: ${floating2} ${props.duration}s infinite;
    `}
`;

const LeftDiv = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;

  video {
    width: 100%;
    height: 85%;
  }
`;

const Panels = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
`;

const PanelImg = styled.img<PanelImgProps>`
  width: 50px;
  height: 50px;
  margin: 1rem 5rem;
  filter: invert(25%) sepia(73%) saturate(2608%) hue-rotate(215deg) brightness(85%) contrast(89%);
  cursor: pointer;

  &:hover {
    filter: invert(25%) sepia(73%) saturate(2608%) hue-rotate(215deg) brightness(200%) contrast(100%);
  }
  &:active {
    filter: invert(25%) sepia(73%) saturate(2608%) hue-rotate(215deg) brightness(150%) contrast(100%);
  }

  &:first-child {
    transform: rotate(180deg);

    ${({ page }) =>
      page === 0 &&
      css`
        cursor: auto;
        filter: invert(25%) sepia(73%) saturate(2608%) hue-rotate(215deg) brightness(150%) contrast(100%);
      `}
  }

  &:last-child {
    ${({ page, maxLength }) =>
      page === maxLength &&
      css`
        cursor: auto;
        filter: invert(25%) sepia(73%) saturate(2608%) hue-rotate(215deg) brightness(150%) contrast(100%);
      `}
  }
`;

const RightDiv = styled.div`
  width: 40%;
  height: 100%;
  padding: 3rem;
  padding-right: 0;

  font-family: 'Black Han Sans';
  font-size: 1.75rem;
  color: ${theme.colors.deepblue};
  text-shadow: 0 0 10px rgba(255, 255, 255, 1);
`;

const ProjectName = styled.p`
  font-size: 3rem;
  padding: 0 0.5rem;

  img {
    width: 2rem;
    margin-left: 0.5rem;

    &:first-child {
      margin-left: 1rem;
    }
  }
`;

const SpendTime = styled.p`
  font-size: 2rem;
  padding: 0 0.5rem;
`;

const Title = styled.p`
  font-size: 1.75rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
  word-break: keep-all;
`;

const DescUl = styled.ul`
  list-style: none;
`;

const DescLi = styled.li`
  font-size: 1.5rem;
  word-break: keep-all;
  padding: 0.25rem 0.5rem;
`;
export default ProjectCards;
