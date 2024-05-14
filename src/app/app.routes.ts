import { NgModule } from '@angular/core';
import { NgModel,FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ListarVehiculosComponent } from './components/listar-vehiculos/listar-vehiculos.component';
import { CrearVehiculoComponent } from './components/crear-vehiculo/crear-vehiculo.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


export const routes: Routes = [
    {path:'', component:ListarVehiculosComponent},
    {path:'crear-vehiculo', component:CrearVehiculoComponent},
    {path:'editar-vehiculo/:id', component:CrearVehiculoComponent},
    {path:'**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
    imports:[RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule,HttpClientModule,CommonModule],
    exports:[RouterModule]
    
})
export class AppRoutingModule{}