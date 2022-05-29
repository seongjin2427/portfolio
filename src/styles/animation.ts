import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const turnover = keyframes`
  0%{transform:rotateY(0);}
  100%{transform:rotateY(90deg);}
`;

export const turnover2 = keyframes`
  0%{transform:rotateY(-90deg);}
  100%{transform:rotateY(0deg);}
`;
export const reTurnover = keyframes`
  0%{transform:rotateY(-90deg);}
  100%{transform:rotateY(0deg);}
`;
