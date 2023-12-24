import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Module { }
export interface Room {
  id: number;
  name: string;
  tables: Table[];
}

export interface Table {
  id: number;
  roomID: number;
  selected: boolean;
}