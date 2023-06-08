import { Component } from '@angular/core';
//Import "FormControl" to work with reactive forms
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  //Need to create an Instance from the FormControl Class
  //In the input we need to write [formControl]="name"
  name = new FormControl("", Validators.required);
  email = new FormControl("", [ Validators.required, Validators.email ] );
}
