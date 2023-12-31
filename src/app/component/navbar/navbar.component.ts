import { Component } from "@angular/core";
import { AuthService } from "../../auth/service/auth.service";
import { Router } from "@angular/router";
import { MES_ROUTES } from "../../config/routes.config";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  constructor(public authService: AuthService, private router: Router) {}
  logout() {
    this.authService.logout();
    this.router.navigate([MES_ROUTES.login]);
  }
}
