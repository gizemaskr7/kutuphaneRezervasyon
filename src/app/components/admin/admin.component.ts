import { Component ,OnInit} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  rez_id: number;
  rez_odaSecimi: string;
  rez_masaSecimi: number;
  rez_tarih: string;
  rez_saat: string;
  k_adSoyad: string;
  k_email: string;
  k_egitim: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  standalone: true,
  imports: [MatTableModule],
})
export class AdminComponent implements OnInit {
    constructor(private http: HttpClient) {}
  
    elements: PeriodicElement[] = [];
    displayedColumns: string[] = [
      'rez_id',
      'k_adSoyad',
      'rez_odaSecimi',
      'rez_masaSecimi',
      'rez_tarih',
      'rez_saat',
      'k_email',
      'k_egitim',
    ];
    dataSource: PeriodicElement[] = [];
  
    ngOnInit(): void {
      const url = `https://localhost:44352/values/getrezervasyonlar`;
  
      this.http.get<any[]>(url).subscribe(
        (result) => {
          if (result && result.length > 0) {
            this.elements = result.map((data) => ({
              k_adSoyad: data.k_adSoyad,
              rez_id: data.rez_id,
              k_egitim: data.k_egitim,
              k_email: data.k_email,
              rez_saat: data.rez_saat,
              rez_odaSecimi: data.rez_odaSecimi,
              rez_tarih: data.rez_tarih,
              rez_masaSecimi: data.rez_masaSecimi,
            }));
            console.log(this.elements[0].k_adSoyad);
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