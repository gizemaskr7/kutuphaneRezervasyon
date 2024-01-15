import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ThemePalette} from '@angular/material/core';
import { UserService } from 'src/app/services/user.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
export interface PeriodicElement {
  rez_odaSecimi:string,
  rez_masaSecimi:number,
  rez_tarih:string,
  rez_saat:string, 
}
@Component({
  selector: 'app-rezarvasyonlarim',
  templateUrl: './rezarvasyonlarim.component.html',
  styleUrls: ['./rezarvasyonlarim.component.css'],
  standalone: true,
  imports: [MatTableModule,MatCheckboxModule,FormsModule],
})
export class RezarvasyonlarimComponent {
  
   task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }

  constructor(private http: HttpClient,private userService: UserService) {}

  elements: PeriodicElement[] = [];
  displayedColumns: string[] = [
    
    'rez_odaSecimi',
    'rez_masaSecimi',
    'rez_tarih',
    'rez_saat',
   
  ];
  dataSource: PeriodicElement[] = [];
  k_id!: number;
  ngOnInit(): void {
    
    const currentUser = this.userService.getCurrentUser();
    const url = `https://localhost:44352/values/GetKisiRezervasyon?id=1`;

    this.http.get<any[]>(url).subscribe(
      (result) => {
        if (result && result.length > 0) {
          this.elements = result.map((data) => ({
            rez_odaSecimi: data.rez_odaSecimi,
            rez_masaSecimi: data.rez_masaSecimi,
            rez_tarih: data.rez_tarih,
            rez_saat: data.rez_saat,
           
          }));
          console.log(this.elements);
          this.dataSource = this.elements;
        } else {
          console.error('Kayıt bulunamadı.');
        }
      },
      (error) => {
        console.error('API isteği hatası:', error);
      }
    );
  }
}