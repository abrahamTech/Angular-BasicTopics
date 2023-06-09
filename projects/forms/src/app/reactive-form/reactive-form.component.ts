import { Component, ViewChild } from '@angular/core';
//Import "FormControl" to work with reactive forms
import { FormControl, Validators, FormGroup, NgForm, NgControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  /* //Need to create an Instance from the FormControl Class
  //In the input we need to write [formControl]="name"
  name = new FormControl("", Validators.required);
  email = new FormControl("", [ Validators.required, Validators.email ] ); */

  //By adding !, you are telling the compiler that you trust the myForm property to be initialized elsewhere
  @ViewChild('formContact') myForm!: NgForm;

  get nameGetter () {
    //WE add "as FormControl" to don't write the "?" in the HTML file
    return this.formUser.get("name") as FormControl;
  }

  get emailGetter () {
    return this.formUser.get("email");
  }

  //Identify the form
  formUser = new FormGroup ({
    "name": new FormControl("", Validators.required),
    "email": new FormControl("", [Validators.required, Validators.email])
  });

  processInfo () {
    console.log(this.formUser.value);

    // Resets all the properties from the form, including inputs
    this.myForm.reset();
  };
}
