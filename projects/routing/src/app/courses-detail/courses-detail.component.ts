import { Component } from '@angular/core';
//With this you can recover the parameters from the route (Var name -> course)
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent {

  courseTs: string = "";

  //We are injecting the route that we retrieve
  constructor(private route: ActivatedRoute) {
    /* Instead of write here the code in the constructor, we write it in the component life cycle (ngOnInit)
    this.route.params.subscribe(params =>{
      this.courseTs = params["course"];
    });*/
  }

  //Work with the component life cycles (Executes a certain action in the life of the component)
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseTs = params["course"];
    });
  }
}
