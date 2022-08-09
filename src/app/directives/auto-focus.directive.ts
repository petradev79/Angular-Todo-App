import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
})
export class AutoFocusDirective implements OnInit {
  private inputElement: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.inputElement = this.elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.inputElement.focus();
  }
}
