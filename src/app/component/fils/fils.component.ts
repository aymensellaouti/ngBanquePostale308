import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-fils",
  templateUrl: "./fils.component.html",
  styleUrls: ["./fils.component.css"],
})
export class FilsComponent {
  /* Je crée mon event */
  @Output() sayCcToPapa = new EventEmitter<string>();

  sayCc() {
    /* J'emet mon event en y incluant la data que je veux envoyer */
    this.sayCcToPapa.emit("Bonjour Papa");
  }
}
