import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

function Introduction() {
  return (
    <Container>
      <Card>이런</Card>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  width: 500px;
  height: 300px;
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid ${theme.colors.yellow};
  border-radius: 15px;
  margin-top: 1rem;
  padding: 1rem;
`;

export default Introduction;
