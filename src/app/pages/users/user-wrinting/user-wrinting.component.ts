import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AddEditComponent } from '../../../shared/components/add-edit/add-edit.component';
import { ViewFormType } from '../../../shared/enums/viewForm-type.enum';
import { PhoneMaskDirective } from '../../../shared/directives/phone-mask.directive';
import { CpfCnpjMaskDirective } from '../../../shared/directives/cpf-cnpj-mask.directive';
import { cpfCnpjValidator } from '../../../shared/validators/cpf-cnpj.validator';
import { ToastUtils } from '../../../shared/utils/toast.utils';

@Component({
  selector: 'app-user-wrinting',
  imports: [
    MatDatepickerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    AddEditComponent,
    PhoneMaskDirective,
    CpfCnpjMaskDirective,
  ],
  templateUrl: './user-wrinting.component.html',
  styleUrl: './user-wrinting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserWrintingComponent implements OnInit {
  cod: number;
  viewType: ViewFormType;
  private route = inject(ActivatedRoute);
  private fb = inject(NonNullableFormBuilder);
  form: FormGroup = this.fb.group({
    cpfCnpj: ['', [cpfCnpjValidator, Validators.required]],
    nome: ['', [Validators.minLength(3), Validators.maxLength(30)]],
    email: ['', [Validators.email]],
    telefone: ['', [Validators.minLength(14)]],
    ativo: [true, [Validators.required]],
    cep: ['', [Validators.minLength(8), Validators.maxLength(9)]],
    rua: [''],
    numero: [''],
    complemento: [''],
    bairro: [''],
    cidade: [''],
    estado: [''],
  });

  constructor() {
    this.route.queryParams.subscribe((params) => {
      switch (Number(params['view'])) {
        case ViewFormType.EDIT: {
          this.viewType = ViewFormType.EDIT;
          break;
        }
        case ViewFormType.NEW: {
          this.viewType = ViewFormType.NEW;
          break;
        }
        case ViewFormType.VIEW: {
          this.viewType = ViewFormType.VIEW;
          break;
        }
      }
    });
    this.route.params.subscribe((params) => {
      this.cod = Number(params['id']);
    });
  }

  ngOnInit(): void {
    console.log(this.form.value);
  }

  saveButton(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      ToastUtils.error('Alguns dados estão inválidos!');
      return;
    }
  }
}
