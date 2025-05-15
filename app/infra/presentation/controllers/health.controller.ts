import { Request, Response } from 'express';

export class HealthController {
  public static async check(req: Request, res: Response): Promise<void> {
    res.json({ status: 'ok' });
  }
} 