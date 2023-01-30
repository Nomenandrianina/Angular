import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonEntreComponent } from './bon-entre.component';

describe('BonEntreComponent', () => {
  let component: BonEntreComponent;
  let fixture: ComponentFixture<BonEntreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonEntreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonEntreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
