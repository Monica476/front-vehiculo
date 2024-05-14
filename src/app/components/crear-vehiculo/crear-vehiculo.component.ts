import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vehiculo } from '../../models/vehiculo';
import { VehiculoService } from '../../services/vehiculo.service';

@Component({
  selector: 'app-crear-vehiculo',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './crear-vehiculo.component.html',
  styleUrl: './crear-vehiculo.component.css'
})
export class CrearVehiculoComponent{
  vehiculoForm:FormGroup;
  titulo = 'Crear Vehiculo';
  id: String | null;
  toastSvc=inject(ToastrService);
  constructor(private fb:FormBuilder,
    private router:Router,
    private _vehiculoService:VehiculoService,
    private aRoute: ActivatedRoute
  ){
    this.vehiculoForm=this.fb.group({
      id: [null],
      marca:['',Validators.required],
      modelo:['',Validators.required],
      matricula:['',Validators.required],
      color:['',Validators.required],
      anio:['',Validators.required]
    })
    this.id= this.aRoute.snapshot.paramMap.get('id');
  }
  ngOnInit():void {
    this.esEditar();
  }
  agregarVehiculo(){
    const VEHICULO:Vehiculo={
      marca:this.vehiculoForm.get("marca")?.value,
      modelo:this.vehiculoForm.get("modelo")?.value,
      matricula:this.vehiculoForm.get("matricula")?.value,
      color:this.vehiculoForm.get("color")?.value,
      anio:this.vehiculoForm.get("anio")?.value,
      id: this.id !== null ? +this.id : 0,
    }
    if(this.id !== null){
      this._vehiculoService.update(VEHICULO).subscribe(()=>{
        this.toastSvc.success("El vehiculo fue actualizado con exito!",'Vehiculo Actualizado');
        this.router.navigate(['/']);
      });
    }
    else{
      console.log(VEHICULO);
      this._vehiculoService.create(VEHICULO).subscribe((Resultado)=>{
        this.toastSvc.success("El vehiculo fue registrado con exito!",'Vehiculo Registrado');
        console.log(Resultado);
        this.router.navigate(['/']);
      }, error=>{
        console.log(error);
        this.vehiculoForm.reset();
       });
      }
  }
   

  esEditar(){
    if(this.id !== null){
           this.titulo='Editar Vehiculo';
           this._vehiculoService.getId(this.id).subscribe((Vehiculo)=>{
            console.log(Vehiculo);
           
            this.vehiculoForm.setValue({

              marca:Vehiculo.marca,
              modelo:Vehiculo.modelo,
              matricula:Vehiculo.matricula,
              color:Vehiculo.color,
              anio:Vehiculo.anio,
              id:Vehiculo.id
          })
          }, error=>{
            console.log(error);
           });
          
     }
  }

}

