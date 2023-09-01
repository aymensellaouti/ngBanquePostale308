import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Cv } from "../model/cv.model";
import { CvService } from "../services/cv.service";
import { MES_ROUTES } from "../../config/routes.config";

@Component({
  selector: "app-detail-cv",
  templateUrl: "./detail-cv.component.html",
  styleUrls: ["./detail-cv.component.css"],
})
export class DetailCvComponent {
  cv: Cv | null = null;
  constructor(
    private acr: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) {
    this.cvService.getCvById(+this.acr.snapshot.params["id"]).subscribe({
      next: (cv) => (this.cv = cv),
      error: (e) => this.router.navigate([MES_ROUTES.cv]),
    });

    /* this.acr.params.subscribe((params) => {
      this.cv = this.cvService.getCvById(+params["id"]);
    }); */
  }

  deleteCv() {
    if (this.cv)
      this.cvService.deleteCv(this.cv.id).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate([MES_ROUTES.cv]);
        },
        error: (e) => {
          console.error("Error", e);
        },
      });
  }
}
