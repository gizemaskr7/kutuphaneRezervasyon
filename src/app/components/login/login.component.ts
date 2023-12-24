import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) { }
  public makeGetRequest(email: string, sifre: string) {
    const url = `https://localhost:44352/values/get?email=${email}&sifre=${sifre}`;

    this.http.get(url).subscribe(
      (data) => {
        console.log('API verisi:', data);
        if (data) {
          this.router.navigate(['/user']);
        }
      },
      (error) => {
        console.error('API isteği hatası:', error);
      }
    );
  }
  public onClickGetRequest(email: string, sifre: string) {
    this.makeGetRequest(email, sifre);
  }
}