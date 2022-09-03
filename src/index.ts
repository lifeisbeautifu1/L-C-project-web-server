import express from 'express';

import 'express-async-errors';
import 'dotenv/config';
import 'colors';

import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import errorHandler from './middleware/error';
import auth from './middleware/auth';
import notFound from './middleware/notFound';

import authRouter from './routes/auth';
import uploadRouter from './routes/upload';

const app = express();

app.set('trust proxy', 1);
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use('/api/auth', authRouter);
app.use('/api/upload', auth, uploadRouter);

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    const server = app.listen(PORT, () =>
      console.log(`Server is running on port ${PORT}`.green.bold)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
