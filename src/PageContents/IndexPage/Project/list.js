import cdkit from './image/cdkit.png';
import jonathan from './image/jonathan.png';
import marker from './image/marker.png';
import flightbase from './image/flightbase.png';
import ontune from './image/ontune_logo.svg';

export const projects = [
  {
    name: 'cdkit',
    company: '개인 프로젝트',
    project: 'CDKit',
    period: '기간 : 2023.08 ~ 진행중',
    contribution: '참여인원 : 1명',
    desc: ['react에서 사용될 수 있는 UI 컴포넌트, 기능을 제공하는 라이브러리'],
    perf: [
      {
        link: 'none',
        text: '라이브러리 컴포넌트 관리',
      },
      {
        link: 'none',
        text: 'yarn workspace를 이용한 프로젝트 관리',
      },
      {
        link: 'none',
        text: 'Public NPM 저장소 배포',
      },
      {
        link: 'none',
        text: '라이브러리의 사용법을 제공하는 문서 페이지 개발',
      },
      {
        link: 'https://cdkit-document.vercel.app/',
        text: '문서 페이지(링크)',
      },
      {
        link: 'https://github.com/KMJ192/cdkit',
        text: 'Github 저장소(링크)',
      },
    ],
    img: {
      width: 300,
      height: 88,
      cnt: 1,
      list: [cdkit],
      link: 'https://cdkit-document.vercel.app/',
    },
    stack: [
      'Typescript',
      'React',
      'NextJS',
      'SCSS',
      'Rollup',
      'Yarn workspace',
      'zustand',
    ],
  },
  {
    name: 'onTuneViewerV5',
    company: '(주)팀스톤',
    project: 'onTuneViewer V5',
    period: '기간 : 2024.04.02 ~ ',
    contribution: '참여인원 : 7명',
    desc: ['기업용 OS 모니터링 도구', 'OS 자원 모니터링 기능 제공'],
    img: {
      width: 300,
      height: 82,
      cnt: 1,
      list: [ontune],
    },
    perf: [
      {
        link: 'none',
        text: '대시보드 페이지 개발',
      },
      {
        link: 'none',
        text: 'Chart 라이브러리를 활용한 데이터 시각화 (ECharts 사용)',
      },
      {
        link: 'none',
        text: 'Svelte4 -> Svelte5 포팅',
      },
    ],
    stack: ['Typescript', 'Svelte', 'SvelteKIT'],
  },
  {
    name: 'jonathanUI',
    company: '(주)아크릴',
    project: 'Jonathan-UI',
    period: '기간 : 2023.02 ~ 2023.06',
    contribution: '참여인원 : 4명',
    desc: [
      '사내에서 사용하는 디자인 시스템',
      '전사 디자인 시스템이 요구됨에 따라 개발',
      '기존 부서별 개발되는 서비스는 디자인이 통일되지 않은 상태였고 통일된 디자인이 요구됨에 따라 디자인 시스템을 개발하기로 결정',
      '외부에 공개가 되지 않아야 하고, 사내에는 공유가 되어야 하는 요구사항에 따라 사설 NPM 저장소를 이용하여 배포',
      'React에서 사용될 수 있는 UI 컴포넌트를 제공',
    ],
    perf: [
      {
        link: 'none',
        text: '공통 UI 컴포넌트 개발',
      },
      {
        link: 'none',
        text: '기능 확장성을 위한 컴포넌트 추상화 코드 제시 및 도입',
      },
      {
        link: 'https://kmj24.tistory.com/234',
        text: '커스텀 테마 주입이 가능해지도록 CSS 변수 사용법 제시',
      },
      {
        link: 'none',
        text: '개발된 UI 컴포넌트의 가이드를 제공하는 문서 프로젝트 개발',
      },
      {
        link: 'none',
        text: '사설 NPM 저장소 생성 및 컴포넌트의 라이브러리 배포',
      },
      {
        link: 'none',
        text: 'Docker, Verdaccio를 이용한 사내 서버에 사설 NPM 저장소 생성',
      },
      {
        link: 'none',
        text: '전사 디자인 시스템 도입이 가능한 기반 마련',
      },
    ],
    img: {
      width: 300,
      height: 82,
      cnt: 1,
      list: [jonathan],
    },
    stack: ['Typescript', 'React', 'Scss', 'Vite', 'NPM', 'Docker'],
  },
  {
    name: 'marker',
    project: 'Jonathan-Marker(V2)',
    period: '기간 : 2022.09 ~ 2023.01',
    contribution: '참여인원 : 4명',
    desc: [
      '이미지 합성 데이터를 쌓기위한 라벨링 도구',
      '이미지를 등록하고 그 이미지에서 특정 오브젝트를 표시하고 추출하여 학습모델이 학습하여 데이터를 쌓음',
      '유저 등록 및 관리 기능 제공',
      '작업 현황과 유저 정보 시각화',
      '특정 이미지에서 어떤 데이터가 얼마나 있는지 시각화',
      '이미지 라벨링 기능 제공',
    ],
    perf: [
      {
        link: 'none',
        text: '대시보드 페이지 개발',
      },
      {
        link: 'none',
        text: '서버 데이터, 차트 라이브러리를 이용한 데이터 시각화 (AMCharts, ECharts 사용)',
      },
      {
        link: 'none',
        text: '새로운 기술 도입 기여 (yarn berry, recoil, react-query)',
      },
      {
        link: 'none',
        text: 'yarn berry',
        exp: [
          '기존 방식 : yarn V1',
          'node_modules의 설치 속도를 개선하기 위한 yarn berry 도입',
          'yarn berry를 사용하기 위한 기본 환경 설정 및 사용법 학습 및 공유',
        ],
      },
      {
        link: 'none',
        text: 'recoil',
        exp: [
          '기존 방식 : redux',
          'redux는 러닝커브가 높고, 비교적 작은 상태관리에도 대량의 코드 발생 문제',
          '위 문제를 해결하기 위해 새로운 상태관리 라이브러리인 recoil을 사용하기로 결정',
          'React의 useState와 비슷한 코드 작성법으로 접근성이 높고 개발 생산성 증대에 기여할 것을 기대, 사용법 학습 및 공유',
        ],
      },
      {
        link: 'none',
        text: 'react-query',
        exp: [
          '기존 방식 : API 통신을 위한 함수를 통해 응답을 받고 처리하던 프로세스',
          'API 통신 함수가 있고 기능이 필요할때마다 API 통신함수에 코드가 추가하며 사용',
          '기존 방식은 유지보수 및 리팩토링 단계에서 지속된 코드의 변경으로 스파게티처럼 복잡한 상태',
          'react-query가 지원하는 캐싱 처리, 상태(로딩, 성공, 실패) 관리, 불필요한 중복 요청 방지 등의 기능을 사용하여 사용자 경험 개선 및 API 요청/응답 컨벤션 체계화',
          'react-query 사용법 학습 및 공유, 사용을 위한 구조 설계 및 공유',
        ],
      },
    ],
    img: {
      width: 300,
      height: 88,
      cnt: 1,
      list: [marker],
      // link: 'https://jonathan.acryl.ai/marker',
    },
    stack: [
      'Typescript',
      'React',
      'React-Query',
      'Recoil',
      'Scss',
      'Vite',
      'ECharts',
      'AMChart',
    ],
  },
  {
    name: 'flightbase',
    project: 'Jonathan-Flightbase',
    period: '기간 : 2021.07 ~ 2023.06',
    contribution: '참여인원 : 5명',
    desc: [
      '기업용 AI운영 보조 도구',
      '학습 모델 관리',
      'CPU, GPU 등 자원 관리 및 자원 점유 모니터링 기능 제공',
      '학습 모델 실행 및 스케줄링',
      '플랫폼에 접근 가능한 유저를 등록 및 관리 기능 제공',
    ],
    perf: [
      {
        link: 'none',
        text: '대시보드 페이지 개발',
      },
      {
        link: 'none',
        text: '서버 데이터 및 차트 라이브러리를 이용한 데이터 시각화 (AMCharts, HightCharts, NivoChart 사용)',
      },
      {
        link: 'none',
        text: 'yarn workspace를 이용한 monorepo 도입',
      },
      {
        link: 'none',
        text: '공통 로직, UI 컴포넌트 분리 및 라이브러리화',
      },
      {
        link: 'none',
        text: 'Storybook을 이용한 UI 컴포넌트 가이드 제공',
      },
    ],
    img: {
      width: 340,
      height: 90,
      cnt: 1,
      list: [flightbase],
      // link: 'https://jonathan.acryl.ai/flightbase',
    },
    stack: [
      'Javascript',
      'React',
      'Redux',
      'Scss',
      'Storybook',
      'AMCharts',
      'HighCharts',
      'NivoChart',
    ],
  },
];
