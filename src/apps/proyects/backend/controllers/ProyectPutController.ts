
import { Request, Response } from 'express';
import { Controller } from './controller';
import httpStatus from 'http-status';

export class ProyectPutController implements Controller {
    async run(req: Request, res: Response): Promise<void> {
        res.status(httpStatus.CREATED).send();
    }
}