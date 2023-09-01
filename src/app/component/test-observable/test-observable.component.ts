import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, filter, map } from "rxjs";

@Component({
  selector: "app-test-observable",
  templateUrl: "./test-observable.component.html",
  styleUrls: ["./test-observable.component.css"],
})
export class TestObservableComponent {
  observable!: Observable<number>;
  constructor(private toaster: ToastrService) {
    this.observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    /* 1er observateur */
    this.observable.subscribe((val) => {
      console.log(val);
    });
    /* 2nd observateur */

    this.observable
      .pipe(
        map((data) => data * 3),
        filter((data) => !(data % 2))
      )
      .subscribe({
        next: (valeur) => {
          this.toaster.info("" + valeur);
        },
        complete: () => {
          this.toaster.warning("BOOOOM !!!!");
        },
        error: (e) => {
          console.log({ erreur: e });
        },
      });
  }
}
