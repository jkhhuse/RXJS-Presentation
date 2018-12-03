import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appDoubleClick]'
})
export class DoubleClickDirective {

  constructor() { }
  @HostListener('dblclick') onDoubleClicked() {
    console.log('double clicked');
  }
}
