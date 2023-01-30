import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparationComponent } from './reparation.component';

describe('ReparationComponent', () => {
  let component: ReparationComponent;
  let fixture: ComponentFixture<ReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
