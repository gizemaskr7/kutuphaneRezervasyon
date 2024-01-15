import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent {
  textFromRez: string = '';
  Veri:string='';
  
sendVeri(data:string){
this.Veri=data;
}
  onButtonClick(data: string) {
    this.textFromRez = data;
  }

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    const currentUser = this.userService.getCurrentUser();
    console.log(currentUser);
  }
}