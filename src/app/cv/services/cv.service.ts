import { Injectable } from "@angular/core";
import { Subject, distinctUntilChanged, Observable } from "rxjs";
import { Cv } from "../model/cv.model";

@Injectable({
  providedIn: "root",
})
export class CvService {
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
  private selectCvSuject = new Subject<Cv>();
  selectCv$ = this.selectCvSuject.asObservable();
  constructor() {}

  getCvs(): Cv[] {
    return this.cvs;
  }

  getCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id === id) ?? null;
  }

  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }

  selectCv(cv: Cv) {
    this.selectCvSuject.next(cv);
  }
}
