import { Component } from "@angular/core";
import { Cv } from "../model/cv.model";
import { LoggerService } from "../../services/logger.service";
import { SayHelloService } from "../../services/say-hello.service";
import { TodoService } from "../../todo/service/todo.service";
import { CvService } from "../services/cv.service";
import { catchError, distinctUntilChanged, Observable, of } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  date: Date = new Date();
  cvs$!: Observable<Cv[]>;
  nbr = 0;
  /*   selectedCv: Cv | null = null; */
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService,
    private toast: ToastrService,
    private cvService: CvService
  ) {
    /* this.cvService.getCvs().subscribe({
      next: (cvs) => (this.cvs = cvs),
      error: (error) => {
        this.toast.error(
          `Les données sont fictives, il y a un problème avec le serveur. Veuillez acontacter l'admin.`
        );
        this.cvs = this.cvService.getFakeCvs();
      },
    }); */
    this.cvs$ = this.cvService.getCvs().pipe(
      catchError((e) => {
        this.toast.error(
          `Les données sont fictives, il y a un problème avec le serveur. Veuillez acontacter l'admin.`
        );
        return of(this.cvService.getFakeCvs());
      })
    );
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
