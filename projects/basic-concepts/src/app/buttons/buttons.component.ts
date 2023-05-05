import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  text_color:string = "";
  button_dis:boolean = false;

  buttons_disabled () {
    this.button_dis = !this.button_dis;
    this.text_color = "";
  }
}
