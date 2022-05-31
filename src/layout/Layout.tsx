import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import { useLocation } from 'react-router-dom';

import Headers from '../components/Headers';
import Home from '../pages/Home';

function Layout({ children }: any) {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? null : <Headers />}
      <TransitionGroup>
        <CSSTransition key={location.pathname} timeout={300} classNames="page">
          {location.pathname === '/' ? (
            <Home />
          ) : (
            <div>
              <TransitionGroup>
                <CSSTransition key={location.pathname} timeout={300} classNames="page">
                  <Body className="page">{children}</Body>
                </CSSTransition>
              </TransitionGroup>
            </div>
          )}
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

const Body = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px 0;
  position: fixed;
  overflow: scroll;

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

export default Layout;
