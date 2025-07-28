import { IMenuItem } from '../interfaces/IMenuItems.interface';

export class MenuItems {
  static readonly items: IMenuItem[] = [
    { icon: 'home', title: 'Home', route: 'home', active: false },
    {
      icon: 'assignment',
      title: 'Ordens de Serviço',
      route: 'os',
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
    {
      icon: 'account_circle',
      title: 'Usuários',
      route: 'users',
      active: false,
    },
  ];
}
