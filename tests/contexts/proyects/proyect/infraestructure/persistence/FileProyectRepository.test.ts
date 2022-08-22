import { Technology } from '../../../../../../src/contexts/proyects/proyect/domain/Technology';
import { Proyect } from '../../../../../../src/contexts/proyects/proyect/domain/Proyect';
import { FileProyectRepository } from '../../../../../../src/contexts/proyects/proyect/infrastructure/persistence/FileProyectRepository';
describe('FileProyectRepository', () => {
    it('should save a proyect', async () => {
        const technology = new Technology(['frontend'], ['backend'], ['dataScience']);
        const expectedProyect = new Proyect("id", "name", "category",
            "description", ["tags"], technology, 1, ["tema"]);
        const repository = new FileProyectRepository();

        await repository.save(expectedProyect);

        const proyect = await repository.search("id");
        expect(proyect).toEqual(expectedProyect)
        
    })
})