import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePieceComponent } from './liste-piece.component';

describe('ListePieceComponent', () => {
  let component: ListePieceComponent;
  let fixture: ComponentFixture<ListePieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePieceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
