import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  name1:String = "John Cena";

  user:User = {
    name: "Tom Cruise",
    age: 30
  }
}
