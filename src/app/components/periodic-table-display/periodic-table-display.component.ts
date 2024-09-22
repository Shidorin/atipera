import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { PeriodicElement } from '../../interfaces';
import { EditDialogComponent } from './edit-dialog.component';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-periodic-table-display',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatIconButton,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './periodic-table-display.component.html',
  styleUrl: './periodic-table-display.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeriodicTableDisplayComponent implements OnChanges, AfterViewInit {
  @Input() public periodicElements: PeriodicElement[] = [];
  @Output() public periodicElementsChange = new EventEmitter<PeriodicElement>();
  @ViewChild(MatSort) private sort = new MatSort();
  public periodicElementsSource = new MatTableDataSource<PeriodicElement>(
    this.periodicElements
  );
  public displayedColumns: (keyof PeriodicElement)[] = [
    'position',
    'name',
    'weight',
    'symbol',
  ];

  constructor(public dialog: MatDialog) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['periodicElements']) {
      this.periodicElementsSource.data = this.periodicElements;
    }
  }

  ngAfterViewInit() {
    this.periodicElementsSource.sort = this.sort;
  }

  public openEditDialog(
    element: PeriodicElement,
    column: keyof PeriodicElement
  ): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: { value: element, column: column },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.updateElement(element, column, result);
      }
    });
  }

  private updateElement(
    element: PeriodicElement,
    column: string,
    newValue: PeriodicElement
  ): void {
    const updatedElement = { ...element, [column]: newValue };
    this.periodicElementsChange.emit(updatedElement);
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    setTimeout(() => {
      this.periodicElementsSource.filter = filterValue.trim().toLowerCase();
    }, 2000);
  }
}
