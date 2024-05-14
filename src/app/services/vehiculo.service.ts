import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Resultado } from '../models/rsVehiculo';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  constructor(private http:HttpClient){}

  list():Observable<Resultado>{
    return this.http.get<Resultado>('http://localhost:8080/api/vehiculo');
  }
  get(marca:String,modelo:String,matricula:String,page:number,size:number){
    return this.http.get(`http://localhost:8080/api/vehiculo/filter?marca=${marca}&modelo=${modelo}&matricula${matricula}&page=${page}&size=${size}`);
  }
  create(vehiculo:Vehiculo){
    return this.http.post<Resultado>('http://localhost:8080/api/vehiculo',vehiculo);
  }
  update( vehiculo:Vehiculo){
    return this.http.put<Resultado>('http://localhost:8080/api/vehiculo',vehiculo);
  }
  delete(id: any) {
    return this.http.delete<Resultado>(`http://localhost:8080/api/vehiculo/${id}`);
  }
  
  getId(id: any){
    return this.http.get<Vehiculo>(`http://localhost:8080/api/vehiculo/${id}`);
  }
 
}
