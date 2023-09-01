import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SayHelloService {
  constructor(private loggerService: LoggerService, private http: HttpClient) {}
  sayCc() {
    this.loggerService.logger("cc");
  }

  getTodos(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }
}
