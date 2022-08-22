import { ProyectCreator } from '../../../../../src/contexts/proyects/proyect/application/ProyectCreator';
import { TechnologyMapper } from '../../../../../src/contexts/proyects/proyect/application/TechnologyMapper';
import { TechnologyCommand } from '../../../../../src/contexts/proyects/proyect/application/TechnologyCommand';
import { ProyectRepository } from '../../../../../src/contexts/proyects/proyect/domain/ProyectRepository';
import { Technology } from '../../../../../src/contexts/proyects/proyect/domain/Technology';
import { Proyect } from '../../../../../src/contexts/proyects/proyect/domain/Proyect';
describe('ProyectCreator', () => {
    it('should create a valid proyect', async () => {

        const repository: ProyectRepository = {
            save: jest.fn()
        };
        const creator = new ProyectCreator(repository);
        const id = "id";
        const name = "proyect1";
        const category = "social sector";
        const description = "application for help older people to deal with loneliness";
        const tags = ["health care", "older people"];
        const technologies = {
            frontEnd: ["angular", "scss"],
            back_end: ["Java", "Spring"],
            data_science: ["Python"]
        };
        const experienceLevel= 1;
        const team = ['']
        const technologyCommand:TechnologyCommand =  TechnologyMapper.toCommand(technologies.frontEnd, technologies.back_end, technologies.data_science);
      
        const expectedTechnology = new Technology(technologies.frontEnd, technologies.back_end, technologies.data_science);
        const expectedProyect = new Proyect(id, name, category, description, tags, expectedTechnology,  experienceLevel, team);
        
      
        await creator.run(id, name, category, description, tags, technologyCommand, experienceLevel, team);

        expect(repository.save).toHaveBeenCalledWith(expectedProyect)
    })
})