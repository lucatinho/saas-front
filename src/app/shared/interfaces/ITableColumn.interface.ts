export type ITableColumn = {
  key: string;
  label: string;
  minWidth: number;
  priority: number;
  maxWidth?: number;
  maxChars?: number;
  actions?: ITableColumnActions[];
}

export type ITableColumnActions = {
  icon: string;
  // color: string;
  type: string;
  tooltip: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  click: (item: any) => void;
}
