import { Request, Response, Router } from 'express';
import container from '../dependency-injection';
import StatusGetController from '../controllers/StatusGetController';

export const register = async (router: Router) => {
        const controller: StatusGetController =  (await container()).get('Apps.proyects.controllers.StatusGetController');
        router.get('/status', (req: Request, res: Response) => controller.run(req, res));
    };

