import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

const response = await fetch('https://api.brawlstars.com/v1/players/%239vj2yyg2j/battlelog', {
  headers: {
    Authorization: `Bearer ${process.env.BRAWL_STARS_API_KEY}`,
    Accept: 'application/json',
  },
});

const data = await response.json();

app.get('/', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Программа работает по адресу http://localhost:${PORT}`);
});