import { Component } from "@angular/core";
import { Cv } from "../model/cv.model";
import { LoggerService } from "../../services/logger.service";
import { SayHelloService } from "../../services/say-hello.service";
import { TodoService } from "../../todo/service/todo.service";
import { CvService } from "../services/cv.service";
import { distinctUntilChanged } from "rxjs";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  date: Date = new Date();
  cvs: Cv[] = [];
  nbr = 0;
  /*   selectedCv: Cv | null = null; */
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService,
    private todoService: TodoService,
    private cvService: CvService
  ) {
    this.cvs = this.cvService.getCvs();
    this.sayHelloService.sayCc();
    this.loggerService.logger("cc je suis le cvComponent");
    this.cvService.selectCv$
      .pipe(distinctUntilChanged())
      .subscribe(() => this.nbr++);
  }
  /*   getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
    this.todoService.logTodo();
  } */
}
