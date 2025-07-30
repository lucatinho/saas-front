export interface ITableColumn {
  key: string;
  label: string;
  // minWidth: number;
  // priority: number;
  actions?: ITableColumnActions[];
}

export interface ITableColumnActions {
  icon: string;
  // color: string;
  type: string;
  tooltip: string;
  click: (item: undefined) => void;
}
