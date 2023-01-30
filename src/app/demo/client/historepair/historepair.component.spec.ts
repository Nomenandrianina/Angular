import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorepairComponent } from './historepair.component';

describe('HistorepairComponent', () => {
  let component: HistorepairComponent;
  let fixture: ComponentFixture<HistorepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorepairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
