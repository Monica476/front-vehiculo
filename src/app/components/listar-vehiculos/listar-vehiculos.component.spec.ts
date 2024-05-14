import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVehiculosComponent } from './listar-vehiculos.component';
import { CommonModule } from '@angular/common';

describe('ListarVehiculosComponent', () => {
  let component: ListarVehiculosComponent;
  let fixture: ComponentFixture<ListarVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarVehiculosComponent,CommonModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
