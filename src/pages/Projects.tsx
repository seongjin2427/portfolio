import styled from 'styled-components';
import ProjectCards from '../components/project/ProjectCards';

import { portfolio, snut, portfolioIconSet, snutIconSet } from '../assets/projects';

function Projects() {
  return (
    <Wrapper>
      <ProjectCards
        duration={5}
        data={portfolio}
        projectName="Portfolio"
        spendTime="2022/05"
        iconSet={portfolioIconSet}
      />
      <ProjectCards duration={7} data={snut} projectName="Snut" spendTime="2022/03 ~ 2022/04" iconSet={snutIconSet} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 200px auto;
`;

export default Projects;
