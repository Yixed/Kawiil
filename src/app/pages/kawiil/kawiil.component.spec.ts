import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KawiilComponent } from './kawiil.component';

describe('KawiilComponent', () => {
  let component: KawiilComponent;
  let fixture: ComponentFixture<KawiilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KawiilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KawiilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
