import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-color",
  templateUrl: "./color.component.html",
  styleUrls: ["./color.component.css"],
})
export class ColorComponent implements OnInit {
  ngOnInit(): void {
    this.divColor = this.defaultColor;
  }
  @Input() defaultColor = "green";
  /* elle represente l'etat de la couleur de la div */
  divColor = "";

  changeColor(newColor: string) {
    this.divColor = newColor;
  }
  reset() {
    this.divColor = this.defaultColor;
  }
}
