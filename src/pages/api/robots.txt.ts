import type { NextApiRequest, NextApiResponse } from 'next';
import { SITE_URL } from '@/lib/site';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'public, s-maxage=86400');
  const robots = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api

Sitemap: ${SITE_URL}/api/sitemap.xml`;
  res.status(200).send(robots);
}


