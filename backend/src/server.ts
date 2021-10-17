import cors from 'cors';
import express, { json } from 'express';
import JokeApi from '../JokeApi'

(async () => {
  const app = express();
  app.use(cors());
  app.use(json());

  const jokeBank = new JokeApi();
  app.get('/jokes', (_, res) => {
    return res.json(jokeBank.getJokes());
  });

  app.post('/jokes', (req, res) => {
    const { body } = req;

    jokeBank.postJoke(body.content);
    return res.json('success');
  });

  app.put('/jokes', (req, res) => {
    const { body: { uuid, content } } = req;

    jokeBank.updateJoke(uuid, content);
    return res.json('success');
  });

  app.delete('/jokes', (req, res) => {
    jokeBank.deleteJoke(req.body.uuid);

    return res.json('success');
  });

  app.use('/', (_, res) => {
    res.json('hello world');
  });

  app.listen(8000, () => {
    console.log(`express server started on 8000`);
  })
})().catch(err => console.log(err));
