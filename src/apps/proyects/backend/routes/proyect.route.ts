import { Request, Response, Router } from "express";
import container from "../dependency-injection";
import { Controller } from '../controllers/controller';

export const register = async (router: Router) => {
    const controller: Controller = (await container()).get('Apps.proyects.controllers.ProyectPutController');
    router.put('/proyect/:id', (req: Request, res: Response) => controller.run(req, res));
} 