import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisDetailComponent } from './regis-detail.component';

describe('RegisDetailComponent', () => {
  let component: RegisDetailComponent;
  let fixture: ComponentFixture<RegisDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
