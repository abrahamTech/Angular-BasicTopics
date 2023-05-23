import { Component } from '@angular/core';

import { User } from "../user";

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.css']
})
export class LoopsComponent {

  users: User[] = [
    {name: "John", age: 23},
    {name: "Paul", age: 34},
    {name: "Harry", age: 12},
    {name: "Charles", age: 29}
  ];
}
