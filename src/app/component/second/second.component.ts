import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-second",
  templateUrl: "./second.component.html",
  styleUrls: ["./second.component.css"],
})
export class SecondComponent {
  constructor(private acr: ActivatedRoute) {
    console.log(this.acr);
  }
}
