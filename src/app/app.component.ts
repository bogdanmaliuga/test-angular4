import { Component,OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger("routerAnimation", [
      transition("* <=> *", [
        query(":enter", [
          style({
            position: "fixed",
            width: "100%",
            transform: "translateX(100%)"
          }),
          animate("0.5s linear", style({ transform: "translateX(0%)" })),

        ], { optional: true }),
        query(":leave", [
          style({
            position: "fixed",
            width: "100%",
            transform: "translateX(0%)",
            opacity: "0.3"
          }),
          animate("0.5s linear", style({ transform: "translateX(-100%)" })),

        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  showLoader: boolean;
  constructor(
    private loaderService: LoaderService) {
  }
  title = 'My Angular 2 app works!';
  // change the animation state
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }
  ngOnInit(){
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
  });
  }
}
