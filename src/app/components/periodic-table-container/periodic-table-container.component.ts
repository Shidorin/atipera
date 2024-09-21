import { Component, inject, OnInit } from '@angular/core';
import { PeriodicElement } from '../../interfaces';
import { PeriodicTableService } from '../../services/periodic-table.service';
import { CommonModule } from '@angular/common';
import { PeriodicTableDisplayComponent } from "../periodic-table-display/periodic-table-display.component";

@Component({
  selector: 'app-periodic-table-container',
  standalone: true,
  imports: [CommonModule, PeriodicTableDisplayComponent],
  templateUrl: './periodic-table-container.component.html',
  styleUrl: './periodic-table-container.component.scss',
})
export class PeriodicTableContainerComponent implements OnInit {
  public periodicElementArray: PeriodicElement[] = [];
  private periodicTableService: PeriodicTableService;

  constructor() {
    this.periodicTableService = inject(PeriodicTableService);
  }
  ngOnInit() {
    this.periodicTableService
      .getProducts()
      .subscribe((data) => (this.periodicElementArray = data));
  }
}
