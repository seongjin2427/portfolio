import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import Headers from '../components/Headers';

function Layout({ children }: any) {
  const location = useLocation();

  return (
    <div>
      <Headers />
      <TransitionGroup>
        <CSSTransition key={location.pathname} timeout={200} classNames="page">
          <Body className="page-slider">{children}</Body>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

const Body = styled.div`
  padding: 80px 0;
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: scroll;
`;

export default Layout;
