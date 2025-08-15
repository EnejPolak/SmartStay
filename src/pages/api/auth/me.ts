import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).end();
    const payload = jwt.verify(token, process.env.JWT_SECRET!);
    return res.status(200).json({ user: payload });
  } catch {
    return res.status(401).end();
  }
}
