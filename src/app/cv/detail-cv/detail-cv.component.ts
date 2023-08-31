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
    this.cv = this.cvService.getCvById(+this.acr.snapshot.params["id"]);
    if (!this.cv) {
      this.router.navigate([MES_ROUTES.cv]);
    }
    /* this.acr.params.subscribe((params) => {
      this.cv = this.cvService.getCvById(+params["id"]);
    }); */
  }

  deleteCv() {
    if (this.cv) this.cvService.deleteCv(this.cv);
    this.router.navigate([MES_ROUTES.cv]);
  }
}