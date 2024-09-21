import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicTableDisplayComponent } from './periodic-table-display.component';

describe('PeriodicTableDisplayComponent', () => {
  let component: PeriodicTableDisplayComponent;
  let fixture: ComponentFixture<PeriodicTableDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodicTableDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodicTableDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
