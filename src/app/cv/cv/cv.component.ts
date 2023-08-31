import { Component } from "@angular/core";
import { Cv } from "../model/cv.model";
import { LoggerService } from "../../services/logger.service";
import { SayHelloService } from "../../services/say-hello.service";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  date: Date = new Date();
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
    new Cv(2, "Sellaouti", "Aymen", "Formateur", "", "5678", 41),
    new Cv(
      3,
      "Sellaouti",
      "Skander",
      "Formateur",
      "                   ",
      "5678",
      4
    ),
  ];
  selectedCv: Cv | null = null;
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService
  ) {
    this.sayHelloService.sayCc();
    this.loggerService.logger("cc je suis le cvComponent");
  }
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
