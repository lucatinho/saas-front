export interface IMenuItem {
  icon: string;
  title: string;
  route?: string;
  active?: boolean;
  children?: IMenuItem[];
  open?: boolean;
}
