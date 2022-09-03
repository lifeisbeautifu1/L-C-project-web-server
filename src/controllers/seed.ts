import { Request, Response } from 'express';

import { query } from '../db/db';

export const createTable = async (req: Request, res: Response) => {
  await query(
    `
    CREATE TABLE users (
        id UUID DEFAULT gen_random_uuid () PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) DEFAULT '',
        is_admin BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    `,
    []
  );
  res.send('Table created!');
};
