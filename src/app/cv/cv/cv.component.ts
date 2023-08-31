import { Component } from "@angular/core";
import { Cv } from "../model/cv.model";
import { LoggerService } from "../../services/logger.service";
import { SayHelloService } from "../../services/say-hello.service";
import { TodoService } from "../../todo/service/todo.service";
import { CvService } from "../services/cv.service";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  date: Date = new Date();
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService,
    private todoService: TodoService,
    private cvService: CvService
  ) {
    this.cvs = this.cvService.getCvs();
    this.sayHelloService.sayCc();
    this.loggerService.logger("cc je suis le cvComponent");
  }
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
    this.todoService.logTodo();
  }
}
