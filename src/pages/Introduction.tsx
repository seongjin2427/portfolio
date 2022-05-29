import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

function Introduction() {
  return (
    <Container>
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perferendis optio omnis quia, magni doloremque
        consectetur officiis nam esse dolorum quas sed ducimus ratione earum. Velit ducimus accusantium qui?
        Reprehenderit.
      </Card>
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perferendis optio omnis quia, magni doloremque
        consectetur officiis nam esse dolorum quas sed ducimus ratione earum. Velit ducimus accusantium qui?
        Reprehenderit.
      </Card>
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

const Card = styled.div`
  width: 100%;
  height: 300px;
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid ${theme.colors.blue};
  border-radius: 25px;
  margin-top: 2rem;
  padding: 2rem;
  overflow: scroll;
  box-shadow: 5px 5px 10px ${theme.colors.deepblue};

  font-size: 2rem;
`;

export default Introduction;
