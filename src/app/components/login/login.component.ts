import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

interface UserData {
  k_adSoyad: string;
  k_dogumTarihi: string;
  k_egitim: string;
  k_email: string;
  k_id: number;
  k_sifre: string;
  k_yetki: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  public makeGetRequest(email: string, sifre: string) {
    const url = `https://localhost:44352/values/get?email=${email}&sifre=${sifre}`;

    this.http.get<any>(url).subscribe(
      (result) => {

        const data = result[0];

        if (data) {
          const k_id = data.k_id;
          if(data.k_yetki == 0){
            const userData: UserData = {
              k_adSoyad: data.k_adSoyad,
              k_dogumTarihi: data.k_dogumTarihi,
              k_egitim: data.k_egitim,
              k_email: data.k_email,
              k_id: data.k_id,
              k_sifre: data.k_sifre,
              k_yetki: data.k_yetki,
            };
  
            this.userService.setCurrentUser(userData);
            this.router.navigate(['/user']);
          }else{
            this.router.navigate(['/admin']);
          }
        } else {
          console.error('Kullanıcı bulunamadı.');
        }
      },
      (error) => {
        console.error('API isteği hatası:', error);
      }
    );
  }

  public onClickGetRequest(email: string, sifre: string): void {
    this.makeGetRequest(email, sifre);
  }
}
