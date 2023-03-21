import axios from 'axios';
import { Menus, Breadcrumbs } from '@src/_type';

function permissionFilter (menus:Menus[], permissions) {
  return menus
    .filter((menu: any) => {
      const hasPermission = menu.permission ? permissions.includes(menu.permission) : true;
      return hasPermission;
    })
    .map((menu: any=) => {
      if (menu.children) {
        return {
          ...menu,
          children: permissionFilter(menu.children, permissions)
        };
      }
      return menu;
    })
    .filter((menu: Breadcrumbs) => menu.href || menu.children?.length > 0);
}

export class SideBarConfig {
  api: any;
  type: any;
  saveKey: string;
  configs: never[];
  localConfigs: any;
  constructor (type, url, configs = []) {
    const api = url;
    this.api = api;
    this.type = type;
    this.saveKey = `sidebar:${type}`;
    this.configs = configs;
    try {
      const localData = window.localStorage?.getItem(this.saveKey);
      if (localData) {
        this.localConfigs = JSON.parse(localData);
      } else {
        this.localConfigs = [];
      }
    } catch (error) {
      this.localConfigs = [];
      console.error(error);
    }
  }

  async getConfig () {
    if (this.configs.length === 0) {
      const { data } = await axios.request({
        method: 'get',
        url: this.api
      });
      if (data?.result) {
        this.configs = data.result;
        try {
          window.localStorage?.setItem(this.saveKey, JSON.stringify(this.configs));
        } catch (error) {
          console.error(error);
        }
      } else {
        this.configs = this.localConfigs;
      }
    }
    return this.configs;
  }
  async getMenus (user, configs) {
    if (!user) {
      throw new Error('必须传入user对象解析菜单');
    }
    let menus;
    if (configs) {
      menus = configs;
    } else {
      menus = await this.getConfig();
    }
    const permissions = user.permissions || [];
    return permissionFilter(menus, permissions);
  }
}