import { Vehiculo } from "./vehiculo";

export interface Resultado {
    content:Vehiculo[];
    data: Data;
  }
  
  export interface Data {
    pageable:string;
    totalElements: number;
    totalPages: number;
    last:boolean;
    numPagina: number;
    size: number;
    number: number;
    first:boolean;
    sort: Sort;
    numberOfElements: number;
    empty:boolean;
  }
  
  export interface Sort {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  }
  
