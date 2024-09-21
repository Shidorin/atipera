import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ELEMENT_DATA } from '../components/data';
import { PeriodicElement } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PeriodicTableService {
  constructor() {}

  public getProducts(): Observable<PeriodicElement[]> {
    return of(ELEMENT_DATA);
  }
}
