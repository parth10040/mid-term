import express from 'express';
import JokeApi from '../JokeApi'

(async () => {
  const app = express();
  const jokeBank = new JokeApi();

  app.use('/', (_, res) => {
    res.json('hello world');
  });

  app.use('getjokes', (_, res) => {
    return res.json(jokeBank.getJokes());
  });

  app.listen(8000, () => {
    console.log(`express server started on 5000`);
  })
})().catch(err => console.log(err));
