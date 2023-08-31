import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from "@angular/core";

@Directive({
  /* [tag] => la balise qui a un attribut tag */
  selector: "[appHighlight]",
})
export class HighlightDirective implements OnInit {
  @Input() in = "yellow";
  @Input() out = "red";
  @HostBinding("style.backgroundColor")
  bgc = "";
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    this.bgc = this.in;
  }
  /* Lorsque j'entre dans le hote la couleur du fond change en jaune */
  @HostListener("mouseenter") onMouseEnter() {
    this.bgc = this.in;
    this.el.nativeElement.innerHTML = "IN";
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.bgc = this.out;
    this.el.nativeElement.innerHTML = "OUT";
  }
}
