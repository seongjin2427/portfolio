import styled, { css } from 'styled-components';
import StackCard from '../components/StackCard';
import { backList, etcList, frontList } from '../styles/stack';
import theme from '../styles/theme';

function Stack() {
  return (
    <Wrapper>
      <Title>Front</Title>
      <Container>
        {frontList.map((list) => (
          <StackCard key={list.name} data={list} />
        ))}
      </Container>
      <Title>Back</Title>
      <Container>
        {backList.map((list) => (
          <StackCard key={list.name} data={list} />
        ))}
      </Container>
      <Title>Etc.</Title>
      <Container>
        {etcList.map((list) => (
          <StackCard key={list.name} data={list} />
        ))}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 65rem;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: baseline;
`;

const Title = styled.div`
  width: 100%;
  font-size: 5rem;
  text-align: center;
  margin-top: 20px;
  font-family: 'Recursive';
  font-weight: 700;
`;

export default Stack;
