import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonsortieComponent } from './bonsortie.component';

describe('BonsortieComponent', () => {
  let component: BonsortieComponent;
  let fixture: ComponentFixture<BonsortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonsortieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonsortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
