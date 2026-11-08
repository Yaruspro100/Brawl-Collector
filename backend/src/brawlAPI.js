import { BRAWL_STARS_API_KEY, BRAWL_STARS_API_URL } from './config/config.js';

export async function getPlayer(playerTag) {
  const tag = encodeURIComponent(playerTag.startsWith('#') ? playerTag : `#${playerTag}`);

  const response = await fetch(`${BRAWL_STARS_API_URL}/players/${tag}`, {
    headers: {
      Authorization: `Bearer ${BRAWL_STARS_API_KEY}`,
      Accept: 'application/json',
    },
  });

  if (!response.ok) throw new Error(`Brawl Stars API: ${response.status}`);
  return response.json();
}
