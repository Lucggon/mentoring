export class TechnologyCommand {
    readonly frontEnd: string[];
    readonly backEnd: string[];
    readonly dataScience: string[];
    constructor( frontEnd:string[],  backEnd: string[],  dataScience:string[]){
        this.backEnd = backEnd;
        this.frontEnd = frontEnd;
        this.dataScience = dataScience;
    }
   
    public  getFrontEnd():string[]{
        return this.frontEnd;
    }
    public getBackend():string[]{
        return this.backEnd;
    }
    public getDataScience():string[]{
        return this.dataScience;
    }
}
