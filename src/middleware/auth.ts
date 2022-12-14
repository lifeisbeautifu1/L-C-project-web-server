import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { query } from '../db/db';
import { UnauthorizedError } from '../errors';

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) throw new UnauthorizedError('Token not provided');

  const { id }: any = jwt.verify(token, process.env.JWT_SECRET as string);

  const user = (
    await query(
      'SELECT id, username, email, image_url, is_admin FROM users WHERE id = $1 LIMIT 1;',
      [id]
    )
  ).rows[0];

  if (!user) throw new UnauthorizedError('Unauthenticated');

  res.locals.user = user;

  return next();
};
