import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    k_adSoyad: '',
    k_dogumTarihi: '',
    k_email: '',
    k_sifre: '',
    k_egitim: '',
    k_yetki: 0
  };

  constructor(private http: HttpClient, private router: Router,) {}

  onSubmit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    this.http.post<any>('https://localhost:44352/values/userpost', this.user, httpOptions)
      .subscribe((response) => {
        console.log('Response:', response);
      },
      (error) => {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
            alert('Kayıt yapıldı!');
            this.router.navigate(['/login']);
      }}
    );
  }
}