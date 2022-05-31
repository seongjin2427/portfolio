import styled from 'styled-components';
import StackCard from '../components/stack/StackCard';
import { stackList } from '../assets/stack';
import theme from '../styles/theme';
import { Fragment } from 'react';

function makeRandomDuration(length: number): number[] {
  let arr: number[] = new Array(length);
  for (let i = 0; i < length; i++) {
    const random = Math.random() * 5 + 2;
    arr[i] = random;
  }
  return arr;
}

function Stack() {
  return (
    <Wrapper>
      {stackList.map((stack) => (
        <Fragment key={stack.text}>
          <Title>{stack.text}</Title>
          <Container>
            {stack.list.map((list, index) => {
              const arr = makeRandomDuration(10);
              return <StackCard size={15} duration={arr[index]} key={list.name} data={list} />;
            })}
          </Container>
        </Fragment>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 65rem;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 200px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 31.25rem;
  }
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
  color: ${theme.colors.deepblue};

  @media (max-width: 768px) {
    width: 30rem;
  }
`;

export default Stack;
