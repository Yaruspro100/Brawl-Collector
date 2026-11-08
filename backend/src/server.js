import express from 'express';
import cors from 'cors';
import { PORT } from './config/config.js';
import { getPlayer } from './brawlAPI.js';
import { getPlayerIcon } from './brawlifyCDN.js'

const app = express();
app.use(cors());

const cache = new Map();

app.get('/player', async (req, res) => {
  const tag = (req.query.tag || '').toUpperCase();
  const now = Date.now();
  const hit = cache.get(tag);

  if (hit && hit.expires > now) {
    return res.json(hit.data);
  }
  try {
    const raw = await getPlayer(tag);
    const data = {
      tag: raw.tag,
      name: raw.name,
      trophies: raw.trophies,
      iconUrl: `https://cdn.brawlify.com/profile-icons/regular/${raw.icon.id}.png`,
    };
    cache.set(tag, { data, expires: now + 2 * 60 * 1000 });
    res.json(data);
  } catch {
    res.status(404).json({ error: 'Игрок не найден' });
  }
});

app.listen(PORT, () => {
});
