const routesHome = {
  name: '首页',
  path: '/home',
  component: './Home',
  access: 'isAccess',
  feature: 'User',
  accessRight: 'Module.Home.Read'
};

const routesAccess = {
  name: '权限演示',
  path: '/access',
  component: './Access',
  access: 'isAccess',
  feature: 'Admin',
  accessRight: 'Module.Access.Read'
};

const routesTable = {
  name: ' CRUD 示例',
  path: '/table',
  component: './Table',
  access: 'isAccess',
  feature: 'Admin',
  accessRight: 'Module.Table.Read'
};

export default [
    {
        path: '/',
        component: './Home',
        routes:[
            routesHome,
            routesAccess,
            routesTable
        ]
    }
]
