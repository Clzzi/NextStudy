### 🧨 Next JS에 대해서 공부한 소스코드 및 내용을 올리는 곳

### NEXT JS의 장점 및 기능
- **Hot Reloading** | 개발 중 저장되는 코드는 자동으로 반영됨
- **Automatic Routing** | pages폴더 안에 있는 폴더 및 파일은 해당 이름으로 라우팅 된다.  
Ex) pages/postFolder/post1.tsx -> localhost:3000/postFolder/post1
- **Tags** | Next에서 제공해주는 Image나 Link 태그등을 통해 UX를 좋게할 수 있다.
- **Pre-Rendering** | Next의 핵심 기능, SSG 및 SSR를 파일 단위로 사용할 수 있음.
- **SEO** | SSR 및 SSG를 지원함으로써 SEO를 최적화 할 수 있음.
- **CNA** | CRA처럼 Create-next-app으로 빠른 babel및 webpack설정을 할 수 있음.
- **Styling** | 내장 SASS/CSS 지원, CSS-in-JS lib 모두 지원
- **배포** | 배포하기가 쉬움
- **CORS** | Data를 가져오는쪽에서의 CORS문제는 SSR을 사용하여 해결할 수 있음
- **TypeScript** | TypeScript를 잘 지원해줌, 적용하기 쉬움
- **Code Spliting** | 일반적인 React 페이지 에서는 초기 렌더링 때 모든 컴포넌트를 내려받게 됨, 그래서 프로젝트의 규모가 커지고 용량이 커지면 초기 로딩속도가 지연될 수 밖에없음. 
Next에서는 이런 문제를 개선해서 필요에 따라 파일을 불러올 수 있게 여러 개의 파일을 분리하는 Code Spliting을 자동으로 해줌.

### NEXT JS의 단점
- **Learning Curve** | 상대적으로 강의 및 자료들이 많은 React, 상태관리 기술들을 공부하고온 나로써는 영어로된 docs 및 적은 자료들을 공부하고 익히기엔 좀 힘들었다.
- **Custom** | 이건 장점이자 단점임, next.config.js, custom server등 커스텀할 부분이 생김
- 다른건 딱히 없는듯.

### 특징
- **getStaticProps** | ```Fetch data at build time, pre-render for Static Generation```라고 Docs에 나와있는데 서버에서 값을 가져올 때 빌드시 값이 고정되고 빌드후에는 서버의 값이 변경되어도 반영되지 않음,이것은 여러 옵션들로 해결할 수 있음   
 (static한 data들을 위한 data fetching시 사용권장), 옵션들 및 자세한 내용은 [여기](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) 에서 알아볼 수 있음
- **getServerSideProps** | ```Fetch data on each request. pre-render for Server-side Rendering```라고 Docs에 나와있는데 **getStaticProps**와는 다르게 빌드와 상관없이, 매 요청마다 데이터를 서버로부터 가져옴.     
(ssr을 위한 data fetching시 사용권장) 자세한 내용은 [여기](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering)에서 확인할 수 있음
- 즉 **getStaticProps** 와 **getServerSideProps**의 차이는 빌드이후에 data변경이 가능한지의 여부임.   
(이것마저도 **getStaticProps**의 특정옵션으로 해결가능하긴함)
- **getStaticPaths** | ```Specify Dynamic Routes to Pre-Render pages based on Data```라고 Docs에 나와있음, 빌드시에 특정 동적 경로를 지정하여 사전 렌더할 수 있는 기능임, 빌드시 특정 페이지만 먼저 다운받아놓는 느낌

### 느낀점
React및 상태관리를 어느정도 다룰 수 있게 되고나서 NEXT를 공부하기 시작했는데 영어로된 Docs나 상대적으로 적은 자료들로 공부하는게 쉽지 않았다. 영어 공부를 더 해야겠다고 느꼈고 아직 공식문서를 잘 보지못한다고 생각했다.
맨 처음 공부하기 시작했을 때는 파일구조나 상태관리 및 데이터 통신에 대한 흐름을 이해하기 어려워서 힘들었으나,
다른사람들의 깃허브 레포지토리와 친구들의 조언으로 수월해진것 같다.
또 SSR을하기위해서 많이 공부해야하는줄 알았으나 React와 상태관리를 어느정도 다룰 수 있으면 NEXT의 덕분인지 구현하는것이 꽤 쉬웠다.
앞으로 블로그등 SSR이 필요한 사이트가 있으면 NEXT를 이용해서 만들어 볼것같다.
