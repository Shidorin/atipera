import { Component, inject, OnInit } from '@angular/core';
import { PeriodicElement } from '../../interfaces';
import { PeriodicTableService } from '../../services/periodic-table.service';
import { CommonModule } from '@angular/common';
import { PeriodicTableDisplayComponent } from '../periodic-table-display/periodic-table-display.component';

@Component({
  selector: 'app-periodic-table-container',
  standalone: true,
  imports: [CommonModule, PeriodicTableDisplayComponent],
  templateUrl: './periodic-table-container.component.html',
  styleUrl: './periodic-table-container.component.scss',
})
export class PeriodicTableContainerComponent implements OnInit {
  public periodicElements: PeriodicElement[] = [];
  private periodicTableService: PeriodicTableService;

  constructor() {
    this.periodicTableService = inject(PeriodicTableService);
  }

  ngOnInit(): void {
    this.periodicTableService.elements$.subscribe((data) => {
      this.periodicElements = data;
    });
  }

  public periodicElementsChange(updatedElement: PeriodicElement) {
    const updatedElements = this.periodicElements.map((element) =>
      element.position === updatedElement.position ? updatedElement : element
    );

    updatedElements.sort((a, b) => a.weight - b.weight);
    updatedElements.forEach((element, index) => {
      element.position = index + 1;
    });

    this.periodicTableService.updateElements(updatedElements);
  }
}
