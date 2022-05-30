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

export const reTurnover = keyframes`
  0%{transform:rotateY(-90deg);}
  100%{transform:rotateY(0deg);}
`;

export const floating = keyframes`

  0%{
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
  }

  100%{
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
  }

`;
