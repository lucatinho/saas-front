import { IMenuItem } from '../interfaces/IMenuItems.interface';
import { RouteUtils } from './route.utils';

export class MenuItems {
  static readonly usuariosTec: IMenuItem[] = [
    {
      icon: 'group',
      title: 'Clientes',
      route: RouteUtils.PAGES.CLIENTES,
      active: false,
    },
  ];

  static readonly usuariosAdmin: IMenuItem[] = [
    {
      icon: 'account_circle',
      title: 'Usuários',
      open: false,
      children: [
        ...MenuItems.usuariosTec,
        {
          icon: 'badge',
          title: 'Funcionarios',
          route: RouteUtils.PAGES.FUNCIONARIO,
          active: false,
        },
      ],
    },
  ];

  static readonly items: IMenuItem[] = [
    { icon: 'home', title: 'Home', route: 'home', active: false },
    {
      icon: 'assignment',
      title: 'Ordens de Serviço',
      route: RouteUtils.PAGES.ORDEM_DE_SERVICO,
      active: false,
    },
    {
      icon: 'build_circle',
      title: 'Serviços',
      route: 'services',
      active: false,
    },
    { icon: 'shopping_cart', title: 'Vendas', route: 'vendas', active: false },
    {
      icon: 'inventory_2',
      title: 'Estoque',
      open: false,
      children: [
        {
          icon: 'shopping_basket',
          title: 'Produtos',
          route: 'products',
          active: false,
        },
        { icon: 'sell', title: 'Marcas', route: 'marcas', active: false },
      ],
    },
    ...MenuItems.usuariosAdmin,
  ];
}
