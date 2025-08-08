import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ITableColumn } from '../../../shared/interfaces/ITableColumn.interface';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  MatFormField,
  MatInputModule,
  MatLabel,
} from '@angular/material/input';
// eslint-disable-next-line max-len
import { DataGridElevationComponent } from '../../../shared/components/data-grid-elevation/data-grid-elevation.component';
import { MatTooltip } from '@angular/material/tooltip';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DateMaskDirective } from '../../../shared/directives/date-mask.directive';
import { PhoneMaskDirective } from '../../../shared/directives/phone-mask.directive';
import { Router } from '@angular/router';
import { RouteUtils } from '../../../shared/utils/route.utils';
import { ViewFormType } from '../../../shared/enums/viewForm-type.enum';

@Component({
  selector: 'app-customers',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatIcon,
    MatFormField,
    MatLabel,
    MatInputModule,
    DataGridElevationComponent,
    MatButton,
    MatIconButton,
    MatTooltip,
    MatSelect,
    MatOption,
    MatDatepickerModule,
    ReactiveFormsModule,
    DateMaskDirective,
    PhoneMaskDirective,
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersComponent implements OnInit {
  form: FormGroup = new FormGroup({
    nome: new FormControl(),
  });
  columns: ITableColumn[] = [
    { key: 'id', label: 'ID', minWidth: 50, priority: 2 },
    { key: 'nome', label: 'Nome', minWidth: 120, priority: 1, maxChars: 18 },
    { key: 'email', label: 'Email', minWidth: 180, priority: 5 },
    { key: 'telefone', label: 'Telefone', minWidth: 120, priority: 3 },
    { key: 'endereco', label: 'Endereço', minWidth: 180, priority: 4 },
    {
      key: 'actions',
      label: 'Ações',
      minWidth: 100,
      priority: 1,
      actions: [
        {
          icon: 'visibility',
          type: 'visibility',
          tooltip: 'Ver',
          click: (itemSelecionado: PeriodicElement) =>
            this.verItemSelecionado(itemSelecionado),
        },
        {
          icon: 'edit',
          type: 'edit',
          tooltip: 'Editar',
          click: (itemSelecionado: PeriodicElement) =>
            this.editarItemSelecionado(itemSelecionado),
        },
      ],
    },
  ];

  data = ELEMENT_DATA;

  options = [
    { value: 2, viewValue: 'Todos' },
    { value: 1, viewValue: 'Ativos' },
    { value: 0, viewValue: 'Desativados' },
  ];

  private fb = inject(FormBuilder);
  private router = inject(Router);

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.minLength(3), Validators.maxLength(30)]],
      dataInicio: [null],
      dataFim: [null],
      email: ['', [Validators.minLength(5), Validators.maxLength(40)]],
      telefone: ['', [Validators.minLength(14)]],
      situacao: [2, [Validators.required]],
    });
  }

  filtrar(): void {
    if (this.form.valid) {
      // Faça o filtro
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  limparFormulario(): void {
    this.form.reset();
  }

  addUser(): void {
    this.router.navigate(
      [RouteUtils.PAGES.USER_ADD_EDIT.replace(':id', String(-1))],
      { queryParams: { view: ViewFormType.NEW } },
    );
  }

  editarItemSelecionado(item: PeriodicElement): void {
    this.router.navigate(
      [RouteUtils.PAGES.USER_ADD_EDIT.replace(':id', String(item.id))],
      { queryParams: { view: ViewFormType.EDIT } },
    );
  }

  verItemSelecionado(item: PeriodicElement): void {
    this.router.navigate(
      [RouteUtils.PAGES.USER_ADD_EDIT.replace(':id', String(item.id))],
      { queryParams: { view: ViewFormType.VIEW } },
    );
  }
}

type PeriodicElement = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
};

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    nome: 'João Silva',
    email: 'joao.silva@email.com',
    telefone: '(11) 99999-1111',
    endereco: 'Rua das Flores, 123',
  },
  {
    id: 2,
    nome: 'Maria Souza',
    email: 'maria.souza@email.com',
    telefone: '(21) 98888-2222',
    endereco: 'Av. Brasil, 456',
  },
  {
    id: 3,
    nome: 'Carlos Pereira Pereira Pereira Pereira',
    email: 'carlos.pereira@email.com',
    telefone: '(31) 97777-3333',
    endereco: 'Praça Central, 789',
  },
  {
    id: 4,
    nome: 'Ana Oliveira',
    email: 'ana.oliveira@email.com',
    telefone: '(41) 96666-4444',
    endereco: 'Rua Verde, 101',
  },
  {
    id: 5,
    nome: 'Pedro Santos',
    email: 'pedro.santos@email.com',
    telefone: '(51) 95555-5555',
    endereco: 'Av. das Américas, 202',
  },
  {
    id: 6,
    nome: 'Lucas Lima',
    email: 'lucas.lima@email.com',
    telefone: '(61) 94444-6666',
    endereco: 'Rua Azul, 303',
  },
  {
    id: 7,
    nome: 'Juliana Costa',
    email: 'juliana.costa@email.com',
    telefone: '(71) 93333-7777',
    endereco: 'Av. Paulista, 404',
  },
  {
    id: 8,
    nome: 'Fernanda Alves',
    email: 'fernanda.alves@email.com',
    telefone: '(81) 92222-8888',
    endereco: 'Rua do Sol, 505',
  },
  {
    id: 9,
    nome: 'Rafael Gomes',
    email: 'rafael.gomes@email.com',
    telefone: '(91) 91111-9999',
    endereco: 'Av. Atlântica, 606',
  },
  {
    id: 10,
    nome: 'Patrícia Ramos',
    email: 'patricia.ramos@email.com',
    telefone: '(12) 98888-0000',
    endereco: 'Rua das Palmeiras, 707',
  },
  {
    id: 11,
    nome: 'Bruno Martins',
    email: 'bruno.martins@email.com',
    telefone: '(13) 97777-1111',
    endereco: 'Av. Central, 808',
  },
  {
    id: 12,
    nome: 'Camila Rocha',
    email: 'camila.rocha@email.com',
    telefone: '(14) 96666-2222',
    endereco: 'Rua Nova, 909',
  },
  {
    id: 13,
    nome: 'Eduardo Melo',
    email: 'eduardo.melo@email.com',
    telefone: '(15) 95555-3333',
    endereco: 'Av. Rio Branco, 1010',
  },
  {
    id: 14,
    nome: 'Larissa Dias',
    email: 'larissa.dias@email.com',
    telefone: '(16) 94444-4444',
    endereco: 'Rua das Laranjeiras, 1111',
  },
  {
    id: 15,
    nome: 'Gabriel Freitas',
    email: 'gabriel.freitas@email.com',
    telefone: '(17) 93333-5555',
    endereco: 'Av. Getúlio Vargas, 1212',
  },
  {
    id: 16,
    nome: 'Aline Teixeira',
    email: 'aline.teixeira@email.com',
    telefone: '(18) 92222-6666',
    endereco: 'Rua do Comércio, 1313',
  },
  {
    id: 17,
    nome: 'Rodrigo Barros',
    email: 'rodrigo.barros@email.com',
    telefone: '(19) 91111-7777',
    endereco: 'Av. Independência, 1414',
  },
  {
    id: 18,
    nome: 'Vanessa Pinto',
    email: 'vanessa.pinto@email.com',
    telefone: '(20) 98888-8888',
    endereco: 'Rua das Acácias, 1515',
  },
  {
    id: 19,
    nome: 'Felipe Cardoso',
    email: 'felipe.cardoso@email.com',
    telefone: '(21) 97777-9999',
    endereco: 'Av. das Nações, 1616',
  },
  {
    id: 20,
    nome: 'Tatiane Souza',
    email: 'tatiane.souza@email.com',
    telefone: '(22) 96666-0000',
    endereco: 'Rua do Progresso, 1717',
  },
];
