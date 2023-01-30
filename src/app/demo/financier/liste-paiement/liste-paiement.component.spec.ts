import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePaiementComponent } from './liste-paiement.component';

describe('ListePaiementComponent', () => {
  let component: ListePaiementComponent;
  let fixture: ComponentFixture<ListePaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePaiementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
