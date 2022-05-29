import styled from 'styled-components';

// 반응형 디자인을 위한 픽셀 컨버팅 함수
const pixelToRem = (size: number) => `${size / 16}rem`;

// font size를 객체로 반환해주자.
const fontSizes = {
  title: pixelToRem(60),
  subtitle: pixelToRem(30),
  paragraph: pixelToRem(18),
};

// 자주 사용하는 색을 객체로 만들자.
const colors = {
  deepblue: '#2155CD',
  blue: '#0AA1DD',
  lightblue: '#79DAE8',
  whiteblue: '#E8F9FD',
};

// 자주 사용하는 스타일 속성을 theme으로 만들어보자.
const common = {
  flexCenter: `
  display: flex;
  align-items: center;
  justify-content: center;
`,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `,
};

// export type fontSizes = typeof fontSizes;
// export type colors = typeof colors;
// export type common = typeof common;

export default { colors, fontSizes, common };
