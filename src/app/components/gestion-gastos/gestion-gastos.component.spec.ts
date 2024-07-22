import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionGastosComponent } from './gestion-gastos.component';

describe('GestionGastosComponent', () => {
  let component: GestionGastosComponent;
  let fixture: ComponentFixture<GestionGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionGastosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
