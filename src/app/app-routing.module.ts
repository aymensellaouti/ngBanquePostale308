import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./component/first/first.component";
import { ColorComponent } from "./component/color/color.component";
import { CvComponent } from "./cv/cv/cv.component";
import { TodoComponent } from "./todo/todo/todo.component";
import { MiniWordComponent } from "./directive/mini-word/mini-word.component";
import { SecondComponent } from "./component/second/second.component";
import { NF404Component } from "./component/nf404/nf404.component";
import { DetailCvComponent } from "./cv/detail-cv/detail-cv.component";
import { LoginComponent } from "./auth/login/login.component";
import { AddCvComponent } from "./cv/add-cv/add-cv.component";
import { authGuard } from "./auth/guard/auth.guard";

/* /cv */
const routes: Routes = [
  { path: "", component: FirstComponent },
  { path: "color", component: ColorComponent },
  { path: "cv", component: CvComponent },
  { path: "cv/add", component: AddCvComponent, canActivate: [authGuard] },
  { path: "cv/:id", component: DetailCvComponent },
  { path: "todo", component: TodoComponent },
  { path: "word", component: MiniWordComponent },
  { path: "login", component: LoginComponent },
  { path: "test/:quelqueChose/:id", component: SecondComponent },
  { path: "**", component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
