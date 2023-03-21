const items = [
  {
    index: '1',
    icon: 'el-icon-view',
    name: '系统管理',
    opened: true,
    children: [
      {
        index: '1-1',
        name: '用户管理',
        href: '/admin/permission/manage',
        permission: 'BACKEND.PERMISSION.MANAGE',
        description: '控制网站和登录权限'
      },
      {
        index: '1-2',
        name: '角色管理',
        href: '/admin/permission/template',
        permission: 'BACKEND.PERMISSION.USER',
        description: '账户开通'
      },
      {
        index: '1-3',
        name: '权限管理',
        href: '/admin/permission/batch',
        permission: 'BACKEND.PERMISSION.BATCH',
        description: '批量开权限模版'
      }
    ]
  },
  {
    index: '5',
    icon: 'el-icon-edit',
    name: '职能管理',
    href: '/admin/group',
    permission: 'BACKEND.ACCOUNT_GROUP.VIEW',
    description: '维护客服职能'
  }
];

export default items;
