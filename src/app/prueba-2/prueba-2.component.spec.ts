import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueba2Component } from './prueba-2.component';

describe('Prueba2Component', () => {
  let component: Prueba2Component;
  let fixture: ComponentFixture<Prueba2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prueba2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Prueba2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
