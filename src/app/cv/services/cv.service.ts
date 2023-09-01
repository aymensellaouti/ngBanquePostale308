import { Injectable } from "@angular/core";
import { Subject, distinctUntilChanged, Observable } from "rxjs";
import { Cv } from "../model/cv.model";
import { API } from "../../config/api.config";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

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
  constructor(private http: HttpClient) {}

  getFakeCvs(): Cv[] {
    return this.cvs;
  }

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(API.cv);
  }

  getCvById(id: number): Observable<Cv | null> {
    return this.http.get<Cv | null>(API.cv + id);
  }
  deleteCv(id: number): Observable<any> {
    /* const params = new HttpParams().set(
      "access_token",
      localStorage.getItem("token") ?? ""
    ); */
    const headers = new HttpHeaders().set(
      "authorization",
      localStorage.getItem("token") ?? ""
    );
    return this.http.delete<any>(API.cv + id, { headers });
  }
  getFakeCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id === id) ?? null;
  }

  deleteFakeCv(cv: Cv): boolean {
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
