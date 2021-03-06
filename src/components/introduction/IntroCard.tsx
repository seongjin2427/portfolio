import styled from 'styled-components';
import { floating2 } from '../../styles/animation';
import theme from '../../styles/theme';

function IntroCard() {
  return (
    <GlassContainer>
      <ImageDiv>
        <img src={require('../../assets/selfie.jpg')} alt="" />
      </ImageDiv>
      <div className="seperate">
        <UpperContainer>
          <IntroUl>
            <IntroLi>
              <span className="name">ITO(이토)</span>
            </IntroLi>
            <IntroLi>
              <span>진성진</span>
            </IntroLi>
            <IntroLi>
              <img src={require('../../assets/email.png')} alt="" />
              <span className="email">ghghgh3434@naver.com</span>
            </IntroLi>
            <IntroLi>
              <img src={require('../../assets/github.png')} alt="" />
              <span className="github">
                <a href="https://github.com/seongjin2427" target={'_blank'} rel="noreferrer">
                  https://github.com/seongjin2427
                </a>
              </span>
            </IntroLi>
          </IntroUl>
        </UpperContainer>

        <LowerContainer>
          <IntroUl>
            <IntroLi>
              <span>
                <Dot />
                조금씩이라도 <span className="emphasize">꾸준히 성장하는것을 지향</span>합니다.
              </span>
            </IntroLi>
            <IntroLi>
              <span>
                <Dot />
                <span className="emphasize">새로운 기술을 배우는 것을 두려워하지 않습니다.</span>
              </span>
            </IntroLi>
            <IntroLi>
              <span>
                <Dot />
                끈기있고 성실하다는 말을 많이 듣습니다.
              </span>
            </IntroLi>
            <IntroLi>
              <span>
                <Dot />
                문제를 해결했을 때, 많은 보람을 느낍니다.
              </span>
            </IntroLi>
          </IntroUl>
        </LowerContainer>
      </div>
    </GlassContainer>
  );
}

const GlassContainer = styled.div`
  ${theme.common.flexCenter};
  width: 70rem;
  height: 32.5rem;
  margin-top: 5rem;
  padding: 5rem;

  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  font-family: 'Black Han Sans';
  font-size: 1.75rem;
  color: ${theme.colors.deepblue};
  text-shadow: 0 0 10px rgba(255, 255, 255, 1);

  animation: ${floating2} 10s infinite;

  .seperate {
    width: 100%;
    height: 100%;
    padding: 3.5rem;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 35rem;
    margin-top: 2.5rem;
    margin-bottom: 7.5rem;
    flex-direction: column;
    padding: 2rem;

    font-size: 0.75rem;

    .seperate {
      height: 40%;
      padding: 0.5rem;
    }
  }
`;

const ImageDiv = styled.div`
  ${theme.common.flexCenter};
  width: 47.5rem;
  height: 100%;

  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 15rem;
    height: 60%;
    img {
      width: auto;
      height: 100%;
    }
  }
`;

const UpperContainer = styled.div`
  width: 100%;
  height: 50%;
  padding-bottom: 0.25rem;

  @media (max-width: 768px) {
    height: 50%;
  }
`;

const IntroUl = styled.ul`
  list-style: none;

  @media (max-width: 768px) {
    padding-bottom: 0.5rem;
  }
`;

const IntroLi = styled.li`
  display: flex;
  align-items: center;
  padding-top: 10px;

  img {
    width: 2.5rem;
    margin-right: 20px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    filter: invert(25%) sepia(73%) saturate(2608%) hue-rotate(215deg) brightness(85%) contrast(89%);
  }
  .name {
    font-size: 3.8rem;
  }
  .github {
    padding-top: 5px;
    a {
      text-decoration: none;
      color: ${theme.colors.deepblue};
      &:hover {
        color: ${theme.colors.blue};
      }
      &:active {
        color: ${theme.colors.deepblue};
      }
    }
  }

  @media (max-width: 768px) {
    padding-top: 7.5px;
    img {
      width: 1.25rem;
      margin-right: 0.5rem;
    }
    .name {
      font-size: 1.75rem;
    }
    .email,
    .github {
      font-size: 0.75rem;
    }
  }
`;

const LowerContainer = styled.div`
  padding-top: 1rem;
  width: 100%;
  height: 50%;

  .emphasize {
    color: ${theme.colors.darkblue};
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    height: 50%;
  }
`;

const Dot = styled.span`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: ${theme.colors.deepblue};
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 1);
  margin-right: 8px;

  @media (max-width: 768px) {
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.25rem;
  }
`;
export default IntroCard;
