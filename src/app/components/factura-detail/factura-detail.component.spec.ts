import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaDetailComponent } from './factura-detail.component';

describe('FacturaDetailComponent', () => {
  let component: FacturaDetailComponent;
  let fixture: ComponentFixture<FacturaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturaDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
