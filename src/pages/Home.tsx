import styled from 'styled-components';
import HomeCard from '../components/home/HomeCard';
import theme from '../styles/theme';

function Home() {
  return (
    <Wrapper>
      <HomeCard />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${theme.common.flexCenter}
  width: 100%;
  min-height: 100vh;
`;
export default Home;
