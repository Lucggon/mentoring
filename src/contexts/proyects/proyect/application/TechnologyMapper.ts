import { TechnologyCommand } from './TechnologyCommand';
export class TechnologyMapper {
    public static  toCommand( frontEnd: string[],  backEnd: string[],  dataScience:string[]):TechnologyCommand{
        return new TechnologyCommand(frontEnd, backEnd, dataScience);
    }
}