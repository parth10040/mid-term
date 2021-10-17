import cors from 'cors';
import express from 'express';
import JokeApi from '../JokeApi'

(async () => {
  const app = express();
  app.use(cors());

  const jokeBank = new JokeApi();
  app.get('jokes', (_, res) => {
    return res.json(jokeBank.getJokes());
  });

  app.use('/', (_, res) => {
    res.json('hello world');
  });

  app.listen(8000, () => {
    console.log(`express server started on 8000`);
  })
})().catch(err => console.log(err));
