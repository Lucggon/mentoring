
import { Request, Response } from 'express';
import { Controller } from './controller';
import httpStatus from 'http-status';
import { ProyectCreator } from '../../../../contexts/proyects/proyect/application/ProyectCreator';

export class ProyectPutController implements Controller {
    
    constructor(private proyectCreator: ProyectCreator){}
    async run(req: Request, res: Response): Promise<void> {
        const {id, name, category, description, tags, technologies, experience_level:experienceLevel, team } = req.body;
        await this.proyectCreator.run(id, name, category, description, tags, technologies, experienceLevel, team);
        res.status(httpStatus.CREATED).send();
    }
}

