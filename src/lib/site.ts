export const SITE_NAME = 'SmartxStay';
export const SITE_URL = 'https://smartxstay.com';
export const SITE_TWITTER = '@smartxstay';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/pictures/logo/smartStay_logo.png`;

export function buildCanonical(pathname: string = '/') {
  try {
    const url = new URL(pathname, SITE_URL);
    const urlStr = url.toString();
    return urlStr.endsWith('/') ? urlStr.slice(0, -1) : urlStr || SITE_URL;
  } catch {
    return `${SITE_URL}${pathname.startsWith('/') ? '' : '/'}${pathname}`;
  }
}


