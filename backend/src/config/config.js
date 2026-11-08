import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const BRAWL_STARS_API_KEY = process.env.BRAWL_STARS_API_KEY;
export const BRAWL_STARS_API_URL = 'https://api.brawlstars.com/v1';
export const BRAWLIFY_CDN_API_URL = 'https://cdn.brawlify.com';
