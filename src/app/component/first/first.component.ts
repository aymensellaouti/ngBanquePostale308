import { Component } from "@angular/core";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.css"],
})
export class FirstComponent {
  name = "je suis first";
  isHidden = false;
  btnMessage = "hide";
  constructor() {
    /*     setInterval(() => {
      this.isHidden = !this.isHidden; '1' == 1
    }, 1500); */
  }
  showHide() {
    this.isHidden = !this.isHidden;
    this.btnMessage = this.btnMessage === "show" ? "hide" : "show";
  }
}

/* J'ai quoi dans ma class
  attributs : état (state)
  méthodes : comportement (behaviour)
*/
