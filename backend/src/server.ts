import express from 'express';

(async () => {
  const app = express();

  app.use('/', (_, res) => {
    res.json('hello world');
  });

  app.listen(8000, () => {
    console.log(`express server started on 5000`);
  })
})().catch(err => console.log(err));
