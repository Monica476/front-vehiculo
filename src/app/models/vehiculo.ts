export class Vehiculo{
    id?:number;
    marca:string;
    modelo:string;
    matricula:string;
    color:string;
    anio:number;

    constructor(marca:string,modelo:string,matricula:string,color:string,anio:number){
        this.marca=marca;
        this.modelo=modelo;
        this.matricula=matricula;
        this.color=color;
        this.anio=anio;
    }

}
