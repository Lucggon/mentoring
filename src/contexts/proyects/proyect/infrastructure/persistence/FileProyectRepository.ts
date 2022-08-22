import { Proyect } from '../../domain/Proyect';
import fs from 'fs';
import { ProyectRepository } from '../../domain/ProyectRepository';
import BSON from 'bson';
import { Technology } from '../../domain/Technology';
export class FileProyectRepository implements ProyectRepository {
    private FILE_PATH = `${__dirname}/proyects`;
    private filePath(id:string):string{
        return `${this.FILE_PATH}.${id}.repo`
    }
    
    async save(proyect: Proyect): Promise<void> {
        fs.promises.writeFile(this.filePath(proyect.id), BSON.serialize(proyect) );
    }
    async search(proyectId: string): Promise<Proyect> {
        const proyectData = await fs.promises.readFile(this.filePath(proyectId));
        const {id, name, category, description, tags, technologies, experienceLevel, team } = BSON.deserialize(proyectData);
        const technology: Technology = new Technology(technologies.frontEnd, technologies.backEnd, technologies.dataScience);
        
        return new Proyect(id, name, category, description, tags, technology, experienceLevel, team);

    }
    
    
}