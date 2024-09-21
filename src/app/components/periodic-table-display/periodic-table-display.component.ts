import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PeriodicElement } from '../../interfaces';


@Component({
  selector: 'app-periodic-table-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './periodic-table-display.component.html',
  styleUrl: './periodic-table-display.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeriodicTableDisplayComponent {
  @Input() periodicElementArray: PeriodicElement[] = [];

}
