const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 12345;

// 기본 미들웨어
app.use(cors({ origin: true, credentials: true }));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// 프론트 정적 파일 서빙
const distPath = path.join(__dirname, '..', 'dist');
app.use(express.static(distPath));

// 라우터
app.use('/api/hello', (req, res) => {
  const jsonObj = {
    aaa: 'aaa',
    bbb: 'bbb',
  };
  res.status().json(jsonObj);
});

// 일단 분석필요 express 5 부터 /*{이름} <= 일단 이름 아무거나 되는데 이유 모름
// https://expressjs.com/en/guide/migrating-5.html#path-syntax 참고
app.get('/*myApp', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// 에러 핸들러
app.use((err, req, res, next) => {
  console.error('[ERROR]', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// 실행
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
