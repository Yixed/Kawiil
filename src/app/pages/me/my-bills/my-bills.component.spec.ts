import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBillsComponent } from './my-bills.component';

describe('MyBillsComponent', () => {
  let component: MyBillsComponent;
  let fixture: ComponentFixture<MyBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyBillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
