import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appPhoneMask]',
})
export class PhoneMaskDirective {
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

    if (value.length > 11) value = value.substring(0, 11);

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else {
      value = value.replace(/^(\d*)/, '($1');
    }

    this.el.value = value;

    if (this.ngControl) {
      this.ngControl.control?.setValue(value, { emitEvent: false });
    }
  }
}
