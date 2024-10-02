import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationMainComponent } from './registration-main.component';

describe('RegistrationMainComponent', () => {
  let component: RegistrationMainComponent;
  let fixture: ComponentFixture<RegistrationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
