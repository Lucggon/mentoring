export class Technology{
    readonly frontEnd: string[];
    readonly backEnd: string[];
    readonly dataScience: string[];

    constructor(
        frontEnd: string[],
        backEnd: string[],
        dataScience:string[]
    ){
        this.frontEnd = frontEnd
        this.backEnd = backEnd;
        this.dataScience = dataScience;
    }
}