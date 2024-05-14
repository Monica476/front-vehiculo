import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VehiculoService } from '../../services/vehiculo.service';
import { Vehiculo } from '../../models/vehiculo';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-listar-vehiculos',
  standalone: true,
  imports: [CommonModule,RouterLink,NgxPaginationModule,FormsModule],
  templateUrl: './listar-vehiculos.component.html',
  styleUrl: './listar-vehiculos.component.css'
})
export class ListarVehiculosComponent implements OnInit{
  listVehiculos: Vehiculo[] = [];
  searchTerm: string = '';
  public page: number = 1;

  constructor(
    private _vehiculoService: VehiculoService,
    private toastSvc: ToastrService 
  ) { }

  ngOnInit(): void {
    this.obtenerVehiculos();
  }

  obtenerVehiculos() {
    this._vehiculoService.list().subscribe(
      (resultado) => {
        console.log(resultado);
        this.listVehiculos = resultado.content;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  eliminarVehiculo(id: any) {
    if (id) {
      this._vehiculoService.delete(id).subscribe(
        (resultado) => {
          this.obtenerVehiculos();
          this.toastSvc.success("El vehículo se eliminó correctamente", "Vehículo Eliminado");
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("ID inválido");
    }
  }

  filterItems() {
    return this.listVehiculos.filter(vehiculo => {
      const searchTermLowerCase = this.searchTerm.toLowerCase();
    return vehiculo.marca.toLowerCase().includes(searchTermLowerCase) ||
           vehiculo.modelo.toLowerCase().includes(searchTermLowerCase) ||
           vehiculo.matricula.toLowerCase().includes(searchTermLowerCase);
    });
  }
}
