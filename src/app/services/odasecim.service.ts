import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OdasecimService {
  
  private selectedTableSource = new Subject<number>();
  selectedTable$ = this.selectedTableSource.asObservable();

  sendSelectedTable(tableNumber: number) {
    this.selectedTableSource.next(tableNumber);
  }
}
