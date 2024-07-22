import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirFacturaComponent } from './subir-factura.component';

describe('SubirFacturaComponent', () => {
  let component: SubirFacturaComponent;
  let fixture: ComponentFixture<SubirFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirFacturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubirFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
