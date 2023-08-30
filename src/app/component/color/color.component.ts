import { Component } from "@angular/core";

@Component({
  selector: "app-color",
  templateUrl: "./color.component.html",
  styleUrls: ["./color.component.css"],
})
export class ColorComponent {
  private defaultColor = "green";
  /* elle represente l'etat de la couleur de la div */
  divColor = this.defaultColor;

  changeColor(newColor: string) {
    this.divColor = newColor;
  }
  reset() {
    this.divColor = this.defaultColor;
  }
}
