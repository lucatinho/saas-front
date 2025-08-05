import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[appDateMask]',
})
export class DateMaskDirective {
  private el: HTMLInputElement;
  private elementRef = inject(ElementRef);
  private ngControl = inject(NgControl);
  constructor() {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener('input', ['$event'])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onInput(event: Event): void {
    let value = this.el.value.replace(/\D/g, '');
    if (value.length > 8) {value = value.substring(0, 8);}
    if (value.length >= 5) {
      value = value.replace(/^(\d{2})(\d{2})(\d{0,4})$/, '$1/$2/$3');
    } else if (value.length >= 3) {
      value = value.replace(/^(\d{2})(\d{0,2})$/, '$1/$2');
    }
    this.el.value = value;

    if (this.ngControl && value.length === 10) {
      const [day, month, year] = value.split('/');
      const date = new Date(+year, +month - 1, +day);
      if (!isNaN(date.getTime())) {
        this.ngControl.control?.setValue(date, { emitEvent: false });
      }
    }
  }
}
