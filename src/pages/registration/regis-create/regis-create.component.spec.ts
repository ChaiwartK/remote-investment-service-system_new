import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisCreateComponent } from './regis-create.component';

describe('RegisCreateComponent', () => {
  let component: RegisCreateComponent;
  let fixture: ComponentFixture<RegisCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
