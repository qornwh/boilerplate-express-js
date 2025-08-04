import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
//import helloRouter from './routes/hello.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 12345;

// 기본 미들웨어
app.use(cors({ origin: true, credentials: true }));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// 라우터
app.use('/api/hello', (req, res) => {
  const jsonObj = {
    aaa: 'aaa',
    bbb: 'bbb',
  };
  res.json(jsonObj);
});

// 기본
app.get('/', (req, res) => {
  res.send('Welcome to Express API Starter!');
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
