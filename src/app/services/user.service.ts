import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: any = null; // Kullanıcı bilgilerini saklayacak değişken

  constructor() { }

  // Kullanıcı bilgilerini güncelleyen metod
  setCurrentUser(userData: any): void {
    this.currentUser = userData;
  }

  // Kullanıcı bilgilerini getiren metod
  getCurrentUser(): any {
    return this.currentUser;
  }
}
