import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidewaysComponent } from './sideways.component';

describe('SidewaysComponent', () => {
  let component: SidewaysComponent;
  let fixture: ComponentFixture<SidewaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidewaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidewaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
