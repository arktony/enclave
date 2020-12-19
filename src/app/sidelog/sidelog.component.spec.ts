import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidelogComponent } from './sidelog.component';

describe('SidelogComponent', () => {
  let component: SidelogComponent;
  let fixture: ComponentFixture<SidelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidelogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
