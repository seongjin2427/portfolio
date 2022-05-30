import React from 'react';
import styled from 'styled-components';

function Introduction() {
  return (
    <Container>
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
  height: 40rem;

  margin-top: 5rem;
  padding: 5rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(11px);

  font-size: 2rem;
`;

export default Introduction;
