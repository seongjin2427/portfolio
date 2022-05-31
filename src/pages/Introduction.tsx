import styled from 'styled-components';
import IntroCard from '../components/introduction/IntroCard';

function Introduction() {
  return (
    <Container>
      <IntroCard />
    </Container>
  );
}
const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export default Introduction;
