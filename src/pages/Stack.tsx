import styled, { css } from 'styled-components';
import StackCard from '../components/StackCard';
import { stackList } from '../assets/stack';
import theme from '../styles/theme';
import { Fragment } from 'react';

function Stack() {
  return (
    <Wrapper>
      {stackList.map((stack) => (
        <Fragment key={stack.text}>
          <Title>{stack.text}</Title>
          <Container>
            {stack.list.map((list) => (
              <StackCard size={15} key={list.name} data={list} />
            ))}
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
`;

export default Stack;
