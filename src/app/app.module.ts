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
import { PereComponent } from './component/pere/pere.component';
import { FilsComponent } from './component/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { CardComponent } from './cv/card/card.component';
import { NgstyleComponent } from './directive/ngstyle/ngstyle.component';
import { MiniWordComponent } from './directive/mini-word/mini-word.component';
import { NgClassComponent } from './directive/ng-class/ng-class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { BtcToUsdPipe } from './pipe/btc-to-usd.pipe';
import { DefaultImagePipe } from './cv/pipe/default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    CardComponent,
    NgstyleComponent,
    MiniWordComponent,
    NgClassComponent,
    HighlightDirective,
    RainbowDirective,
    BtcToUsdPipe,
    DefaultImagePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
