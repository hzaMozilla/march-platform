export interface Breadcrumbs {
  children: any;
  index: string;
  name: string;
  href: string;
  permission: string;
  description: string;
}

export interface Menus {
  index: string;
  icon: string;
  name: string;
  opened: true;
  children: Array<Breadcrumbs>
}
