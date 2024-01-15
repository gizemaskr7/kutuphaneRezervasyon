import { Component ,EventEmitter,Input,Output} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { OdasecimService } from 'src/app/services/odasecim.service';


@Component({
  
  selector: 'app-rez',
  templateUrl: './rez.component.html',
  styleUrls: ['./rez.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule,FormsModule],

})
export class RezComponent {
  @Output() ngModelChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() textToDisplay: string = '';

  sendVeri(Value:string) {
    
    const dataToSend = Value; 
    this.ngModelChange.emit(dataToSend);
  }

  selectedTable: number | null = null;
  rez = {
    rez_odaSecimi: '',
    rez_masaSecimi:  '',
    rez_tarih: '',
    rez_saat:  '',
    rez_kid:0
  };
  varolan = {
    rez_odaSecimi: '',
    rez_masaSecimi:  '',
  };
  
  minDate: string;
  constructor(private http: HttpClient, private odasecimService: OdasecimService,private userService: UserService) { const today = new Date();
    this.minDate = today.toISOString().split('T')[0];}
  ngOnInit() {
    
    this.odasecimService.selectedTable$.subscribe(tableNumber => {
      this.selectedTable = tableNumber;
    });
  }
 
  onSubmit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    const currentUser = this.userService.getCurrentUser();
    this.rez.rez_kid = currentUser.k_id;
    this.http.post<any>('https://localhost:44352/values/rezPost', this.rez, httpOptions)
      .subscribe((response) => {
        console.log('Response:', response);
      },
      (error) => {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
            alert('Rezervasyon yapıldı!');
      }}
    );
  }
  tarihDegisti() {
    const url = `https://localhost:44352/values/GetTumRezervasyonlar?date=${this.rez.rez_tarih}`;
    this.http.get<any>(url).subscribe(
      (result) => {
        const data = result[0];
        this.sendVeri(data);
      });
  }
}