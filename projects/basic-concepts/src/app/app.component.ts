import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-concepts';

  dataFromTypescriptVar = "Hello from File app.component TYPE SCRIPT {{ }}";
  dataFromTypescriptVar2 = "Hello from File app.component TYPE SCRIPT 2 [ ]";

  dataFromInput = "";
}
