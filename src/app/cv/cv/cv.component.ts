import { Component } from "@angular/core";
import { Cv } from "../model/cv.model";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  cvs: Cv[] = [
    new Cv(
      1,
      "Sbaiti",
      "taha",
      "Concepteur Dévellopeur",
      "rotating_card_profile3.png",
      "1234",
      20
    ),
    new Cv(
      2,
      "Sellaouti",
      "Aymen",
      "Formateur",
      "rotating_card_profile2.png",
      "5678",
      41
    ),
  ];
}
