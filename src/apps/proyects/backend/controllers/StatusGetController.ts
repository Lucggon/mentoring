import { Request, Response } from 'express';
import { Controller } from './controller';
export default class StatusGetController implements Controller{
    async run(req: Request, res: Response): Promise<void> {
        console.log('no lega')
        res.status(200).send();
    }

}
