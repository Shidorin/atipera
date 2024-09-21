import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicTableContainerComponent } from './periodic-table-container.component';

describe('PeriodicTableContainerComponent', () => {
  let component: PeriodicTableContainerComponent;
  let fixture: ComponentFixture<PeriodicTableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodicTableContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodicTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
