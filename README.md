# 사용법

## 해당 프로젝트를 clone 한다.

1. `npm i`
2. `npm run dev` → 백엔드 개발 시 리빌드해서 다시 실행할 필요 없음

![nodemon 설치!](https://img.shields.io/badge/nodemon%20%EC%84%A4%EC%B9%98%21-red?style=flat&logoColor=white)

백엔드 개발 시 `nodemon`을 global로 설치한다. (`nodemon`: 파일 변경 감지하고 다시 서버를 실행시키는 모듈이다.)  
`npm install -g nodemon`

## 프론트 화면을 보고 싶을 경우

1. 빌드 결과물인 `dist` 폴더를 해당 프로젝트에 복사해서 넣기 ← 이 부분은 자동화(스크립트 or 쉘) 여부 아직 모르겠음
2. 이후에는 정적 파일을 가져온다.

코드를 정리하고 싶을 때 다음 명령어 실행  
`npm run format`

## 🌍 외부 호스팅

[프론트 구성 참고](https://github.com/qornwh/boilerplate-vite-react-js/blob/main/README.md#-%EC%99%B8%EB%B6%80-%ED%98%B8%EC%8A%A4%ED%8C%85)

- 사용법 동일 단, 포트 설정은 현재 백엔드 포트로 변경

## 프로젝트 구성

- RDBMS : 추천받음
- `prisma` : DB랑 JS를 쉽게 사용할 수 있는 ORM
- `type`: CommonJS (`import`, `export` 사용 불가, 만약 사용하고 싶으면 변경 작업 필요)
