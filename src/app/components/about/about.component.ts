import { Component } from '@angular/core';
import { slideInOut } from 'src/app/animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [slideInOut],
})
export class AboutComponent {

}
