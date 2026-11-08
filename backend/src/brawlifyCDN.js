import { BRAWLIFY_CDN_API_URL } from './config/config.js'

export async function getPlayerIcon(iconId) {
  const response = await fetch(`${BRAWLIFY_CDN_API_URL}/profile-icons/regular/${iconId}.png`, {
    headers: {
      Accept: 'image/png',
    }
  });

  if (!response.ok) throw new Error(`BrawlifyCDN API: ${response.status}`);
  return Buffer.from(await response.arrayBuffer());
}
