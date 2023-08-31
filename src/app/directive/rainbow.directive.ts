import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "input [appRainbow]",
})
export class RainbowDirective {
  @HostBinding("style.color") color = "";
  @HostBinding("style.border") border = "4px solid";
  @HostBinding("style.borderColor") bc = "black";
  constructor() {}
  @HostListener("keyup") onKeyUp() {
    this.bc = this.changeColor();
    this.color = this.changeColor();
  }
  private changeColor(): string {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
}
