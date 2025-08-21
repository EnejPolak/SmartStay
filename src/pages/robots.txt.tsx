import type { GetServerSideProps } from 'next';
import { SITE_URL } from '@/lib/site';

function Robots() { return null; }

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'public, s-maxage=86400');
  const robots = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /api

Sitemap: ${SITE_URL}/sitemap.xml`;
  res.write(robots);
  res.end();
  return { props: {} };
};

export default Robots;


