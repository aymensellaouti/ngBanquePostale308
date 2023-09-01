import { Component } from "@angular/core";
import { CredentialsDto } from "../dto/credentials.dto";
import { AuthService } from "../service/auth.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { MES_ROUTES } from "../../config/routes.config";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  login(credentials: CredentialsDto) {
    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log({ response });
        /* Je vais récupérer le token et le stocker dans le localStorage */
        localStorage.setItem("token", response.id);
        /* Ensuite je redirige vers la liste des Cvs */
        this.router.navigate([MES_ROUTES.cv]);
      },
      error: (e) => {
        /* toaster une erreur */
        this.toastr.error("Veuillez vérifier vos crédentials");
      },
    });
  }
}
