import { Component } from '@angular/core';
interface Oda {
  id: number;
  masalar: Masa[];
}

interface Masa {
  id: number;
  numara: string;
  rezerveEdildi: boolean;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  odalar: Oda[] = [
    {
      id: 1,
      masalar: [
        { id: 1, numara: 'Masa 1', rezerveEdildi: false },
        { id: 2, numara: 'Masa 2', rezerveEdildi: false },
        { id: 3, numara: 'Masa 3', rezerveEdildi: false },
        { id: 4, numara: 'Masa 4', rezerveEdildi: false },
        { id: 5, numara: 'Masa 5', rezerveEdildi: false }, 
        { id: 6, numara: 'Masa 6', rezerveEdildi: false },
        { id: 7, numara: 'Masa 7', rezerveEdildi: false },
        { id: 8, numara: 'Masa 8', rezerveEdildi: false },
        { id: 9, numara: 'Masa 9', rezerveEdildi: false },
        { id: 10, numara: 'Masa 10', rezerveEdildi: false },
        { id: 11, numara: 'Masa 11', rezerveEdildi: false },
        { id: 12, numara: 'Masa 12', rezerveEdildi: false },
        { id: 13, numara: 'Masa 13', rezerveEdildi: false },
        { id: 14, numara: 'Masa 14', rezerveEdildi: false },
      ]
    },
  ];

  secilenOda!: Oda;
  secilenMasa!: Masa;

  odaSec(secilenOda: Oda) {
    this.secilenOda = secilenOda;
    this.secilenMasa ; // Yeni bir oda seçildiğinde masa seçimini sıfırla
  }

  masaSec(secilenMasa: Masa) {
    if (!secilenMasa.rezerveEdildi) {
      this.secilenMasa = secilenMasa;
      // Burada rezervasyon işlemleri yapılabilir
      secilenMasa.rezerveEdildi = true; // Örnek olarak, masa seçildiğinde rezerve edildi olarak işaretle
    } else {
      console.log('Bu masa zaten rezerve edilmiş.');
    }
  }
}