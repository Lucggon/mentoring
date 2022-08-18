import { Proyect } from "./Proyect";

export interface ProyectRepository {
    save(proyect: Proyect): Promise<void>
}