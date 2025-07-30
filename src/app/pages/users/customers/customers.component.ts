import { Component } from '@angular/core';
import { DataGridComponent } from '../../../shared/components/data-grid/data-grid.component';
import { ITableColumn } from '../../../shared/interfaces/ITableColumn.interface';

@Component({
  selector: 'app-customers',
  imports: [DataGridComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent {
  columns: ITableColumn[] = [
    { key: 'id', label: 'ID' },
    { key: 'nome', label: 'Nome' },
    { key: 'email', label: 'Email' },
    { key: 'telefone', label: 'Telefone' },
    { key: 'endereco', label: 'Endereço' },
    {
      key: 'actions',
      label: 'Ações',
      actions: [
        {
          icon: 'edit',
          type: 'edit',
          tooltip: 'Editar',
          click: (itemSelecionado) =>
            this.editarItemSelecionado(itemSelecionado),
        },
        {
          icon: 'delete',
          type: 'delete',
          tooltip: 'Excluir',
          click: (itemSelecionado) =>
            this.excluirItemSelecionado(itemSelecionado),
        },
      ],
    },
  ];

  data = ELEMENT_DATA;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  editarItemSelecionado(item) {
    console.log(item);
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  excluirItemSelecionado(item) {
    console.log(item);
  }
}

interface PeriodicElement {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
}

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
    nome: 'Carlos Pereira',
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
