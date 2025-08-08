import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCpfCnpjMask]',
})
export class CpfCnpjMaskDirective {
  private el: HTMLInputElement;
  private elementRef = inject(ElementRef);
  private ngControl = inject(NgControl);

  constructor() {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    let value = this.el.value.replace(/\D/g, '');

    if (value.length > 14) {
      value = value.substring(0, 14);
    }

    if (value.length <= 11) {
      // CPF: 000.000.000-00
      value = value.replace(/^(\d{3})(\d)/, '$1.$2');
      value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
      value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    } else {
      // CNPJ: 00.000.000/0000-00
      value = value.replace(/^(\d{2})(\d)/, '$1.$2');
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
      value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3/$4');
      value = value.replace(
        /^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/,
        '$1.$2.$3/$4-$5',
      );
    }

    this.el.value = value;
    if (this.ngControl) {
      this.ngControl.control?.setValue(value, { emitEvent: false });
    }
  }
}
