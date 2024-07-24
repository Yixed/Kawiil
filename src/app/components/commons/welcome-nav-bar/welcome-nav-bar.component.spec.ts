import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeNavBarComponent } from './welcome-nav-bar.component';

describe('WelcomeNavBarComponent', () => {
  let component: WelcomeNavBarComponent;
  let fixture: ComponentFixture<WelcomeNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomeNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
