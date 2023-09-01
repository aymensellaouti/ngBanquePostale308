import { Component, Input } from "@angular/core";
import { Cv } from "../model/cv.model";
import { ToastrService } from "ngx-toastr";
import { EmbaucheService } from "../services/embauche.service";
import { CvService } from "../services/cv.service";
import { distinctUntilChanged } from "rxjs";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  constructor(
    private toastr: ToastrService,
    private embaucheService: EmbaucheService,
    private cvService: CvService
  ) {
    this.cvService.selectCv$
      .pipe(distinctUntilChanged())
      .subscribe((cv) => (this.cv = cv));
  }
  @Input() cv: Cv | null = null;

  embaucher() {
    if (this.cv)
      if (!this.embaucheService.embauche(this.cv)) {
        this.toastr.error(
          `${this.cv.firstname} ${this.cv.name} est déjà pré selectionné`
        );
      }
  }
}
