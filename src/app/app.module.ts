import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstComponent } from "./component/first/first.component";
import { SecondComponent } from "./component/second/second.component";
import { ThirdComponent } from "./component/third.component";
import { ColorComponent } from "./component/color/color.component";
import { TwoComponent } from "./component/two/two.component";
import { FormsModule } from "@angular/forms";
import { RotatingCardComponent } from './component/rotating-card/rotating-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
