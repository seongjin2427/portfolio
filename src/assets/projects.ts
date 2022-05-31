import { stackIconList } from './stack';

export type DataProps = {
  id: number;
  title: string;
  desc: string[];
}[];

export type StackProps = {
  src: string;
};

const portfolioStack = ['React', 'TypeScript'];
export const portfolioIconSet = portfolioStack.map((stack: any) => stackIconList[stack].src);

const snutStack = ['Vue', 'Java', 'Spring Boot'];
export const snutIconSet = snutStack.map((stack: any) => stackIconList[stack].src);

export const portfolio: DataProps = [
  {
    id: 1,
    title: '시연영상',
    desc: [
      'React 사용, 컴포넌트 단위의 SPA 웹페이지 구현',
      'Styled-component로 CSS in JS를 사용하여 구현',
      'React Router 라이브러리를 이용한 페이지 전환',
    ],
  },
];

export const snut: DataProps = [
  {
    id: 1,
    title: '메인화면',
    desc: [
      '메인화면의 컬렉션 클릭 시, 모달창이 뜸',
      '작성자가 모아둔 포스팅들(컬렉션)의 각 첫번째 사진을 확인 할 수 있음',
      '사진을 클릭하면 해당 컬렉션 페이지로 이동',
      '각 포스팅(큐레이션)을 클릭하면 해당 포스팅의 내용 및 사진을 확인 할 수 있음.',
    ],
  },
  {
    id: 2,
    title: '메인화면 - 검색',
    desc: ['메인화면 검색창에 검색단어를 입력 후, 엔터를 누르면 해당 단어가 포함된 컬렉션 및 큐레이션을 볼 수 있음'],
  },
  {
    id: 3,
    title: 'My Collection 페이지 - 큐레이션 등록',
    desc: ['큐레이션 등록 수에 따른 캐릭터 추가 기능', '사진 등록 및 타이틀, 내용 및 해시태그 입력 후 등록 기능'],
  },
  {
    id: 4,
    title: 'My Collection 페이지 - 컬렉션 등록',
    desc: ['로그인한 사용자가 작성했던 큐레이션을 모아서 컬렉션을 발행하는 기능'],
  },
  {
    id: 5,
    title: 'Community - 댓글 등록, 커뮤니티 수정',
    desc: [
      '커뮤니티 목록에 대한 페이징 처리',
      '커뮤니티 댓글 등록',
      '커뮤니티 만든 사람일 경우에만 커뮤니티 본문 수정',
      '수정 시, 텍스트 에디터 (Vue TipTap 라이브러리 이용) 사용하여 편집 가능',
    ],
  },
  {
    id: 6,
    title: 'Community - 검색',
    desc: ['커뮤니티 목록에 대한 페이징 처리', '커뮤니티 타이틀의 단어를 검색하는 기능'],
  },
  {
    id: 7,
    title: 'My Page- Community 가입',
    desc: [
      '가입된 커뮤니티 목록 확인',
      '가입된 커뮤니티에서만 댓글 등록 가능',
      '가입 시, 커뮤니티장에게 가입 요청 메시지와 함께 가입 요청 기능',
      '커뮤니티장은 아이디와 메시지를 보고 요청 또는 거절 가능',
      '커뮤니티장이 가입 승인 후 부터 댓글 작성 가능',
    ],
  },
];
