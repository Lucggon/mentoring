import { TechnologyCommand } from './TechnologyCommand';
import { ProyectRepository } from '../domain/ProyectRepository';
import { Proyect } from '../domain/Proyect';
import { Technology } from '../domain/Technology';
export class ProyectCreator {
    constructor(private repository: ProyectRepository){}

    async run(id: string, name:string, category: string, description:string, tags:string[], technologies: TechnologyCommand, experienceLevel:number, team:string[]){
        const technology: Technology = new Technology(technologies.getFrontEnd(), technologies.getBackend(), technologies.getDataScience());
        const course = new Proyect(id, name,category,description,tags, technology, experienceLevel,team);
        return this.repository.save(course);
    }
}