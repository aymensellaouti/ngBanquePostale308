import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./component/first/first.component";
import { ColorComponent } from "./component/color/color.component";
import { CvComponent } from "./cv/cv/cv.component";
import { TodoComponent } from "./todo/todo/todo.component";
import { MiniWordComponent } from "./directive/mini-word/mini-word.component";

const routes: Routes = [
  { path: "", component: FirstComponent },
  { path: "color", component: ColorComponent },
  { path: "cv", component: CvComponent },
  { path: "todo", component: TodoComponent },
  { path: "word", component: MiniWordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
