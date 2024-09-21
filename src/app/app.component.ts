import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeriodicTableContainerComponent } from "./components/periodic-table-container/periodic-table-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PeriodicTableContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'atipera';
}
