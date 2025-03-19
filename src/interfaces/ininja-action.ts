export interface INinjaAction {
  id: string;
  value: string;
  title: string;
  hotkey?: string;
  handler?: Function;
  mdIcon?: string;
  icon?: string;
  parent?: string;
  keywords?: string;
  children?: string[];
  section?: string;
  alwaysVisible?: boolean;
}
