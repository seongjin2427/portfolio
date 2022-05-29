import styled from 'styled-components';
import Headers from '../components/Headers';

function Layout({ children }: any) {
  return (
    <div>
      <Headers />
      <Body>{children}</Body>
    </div>
  );
}

const Body = styled.div``;

export default Layout;
