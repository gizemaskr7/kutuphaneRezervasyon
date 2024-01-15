import { Component, EventEmitter, Output,Input } from '@angular/core';
import { OdasecimService } from 'src/app/services/odasecim.service';

@Component({
  selector: 'app-odasecim',
  templateUrl: './odasecim.component.html',
  styleUrls: ['./odasecim.component.css']
})
export class OdasecimComponent {
  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();
  @Input() veri: any = '';

  sendData(buttonValue:string) {
    const dataToSend = buttonValue; 
    this.buttonClick.emit(dataToSend);
  }

  selectedTable: number | null = null;

  constructor(private odasecimService: OdasecimService) {}

  toggleColor(tableNumber: number): void {
    if (this.selectedTable === tableNumber) {
      this.selectedTable = null;
    } else {
      this.selectedTable = tableNumber;
      this.odasecimService.sendSelectedTable(tableNumber);
    }
  }
  isMasaSelected(odaAdi: string, masaAdi: string): boolean {
    if(this.veri.rez_odaSecimi == odaAdi && this.veri.rez_masaSecimi == masaAdi.split('Masa ')[1]){
      return true;
    }else{
      return false;
    }
  }
  handleClick(oda:string ,masa:string, tableNumber:number) {
    if (this.isMasaSelected(oda, masa)) {
      alert('Bu masa zaten seçili!');
    } else {
      this.sendData(masa);
      this.toggleColor(tableNumber);
      this.selectedTable = tableNumber;
    }
  }
}
