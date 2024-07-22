import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeVentasComponent } from './informe-ventas.component';

describe('InformeVentasComponent', () => {
  let component: InformeVentasComponent;
  let fixture: ComponentFixture<InformeVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformeVentasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformeVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
