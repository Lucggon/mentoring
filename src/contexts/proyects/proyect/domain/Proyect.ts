import { Technology } from './Technology';
export class Proyect{
    readonly id:string;
    readonly name: string;
    readonly category: string;
    readonly description: string;
    readonly tags: string[];
    readonly tecnoogies: Technology;
    readonly experienceLevel: number;
    readonly team: string[];


    public constructor(id:string, name:string, category:string,
         description:string, tags:string[], tecnologies: Technology, experienceLevel:number, team:string[] ){
            this.id = id;
            this.name = name;
            this.category =category;
            this.description = description;
            this.tecnoogies = tecnologies;
            this.tags = tags;
            this.experienceLevel =experienceLevel;
            this.team = team;
         }

}


