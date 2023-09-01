import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { SayHelloService } from "../../services/say-hello.service";

@Component({
  selector: "app-test-http",
  templateUrl: "./test-http.component.html",
  styleUrls: ["./test-http.component.css"],
})
export class TestHttpComponent {
  constructor(private sayHelloService: SayHelloService) {
    this.sayHelloService.getTodos().subscribe((data) => console.log(data));
  }
}
