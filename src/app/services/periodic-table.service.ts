import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ELEMENT_DATA } from '../components/data';
import { PeriodicElement } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PeriodicTableService {
  private elementsSubject = new BehaviorSubject<PeriodicElement[]>(
    ELEMENT_DATA
  );
  elements$ = this.elementsSubject.asObservable();

  public updateElements(newElements: PeriodicElement[]) {
    this.elementsSubject.next(newElements);
  }
}
