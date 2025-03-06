export const sideMenu = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/dashboard',
    icon: 'dashboard_icon',
    children: [],
  },
  {
    id: 2,
    title: 'Users',
    path: '/users',
    icon: 'users_icon',
    children: [
      {
        id: 3,
        title: 'Add User',
        path: '/users/add',
        icon: 'add_user_icon',
        children: [],
      },
      {
        id: 4,
        title: 'Manage Users',
        path: '/users/manage',
        icon: 'manage_users_icon',
        children: [
          {
            id: 1,
            title: 'Delete User',
            path: '/users/manage/delete',
            icon: '',
            children: [
              {
                id: 1,
                title: 'Recent Delete',
              },
            ],
          },
        ],
      },
      {
        id: 5,
        title: 'Manage Admin',
      },
    ],
  },
  {
    id: 5,
    title: 'Settings',
    path: '/settings',
    icon: 'settings_icon',
    children: [
      {
        id: 6,
        title: 'Profile Settings',
        path: '/settings/profile',
        icon: 'profile_icon',
        children: [],
      },
      {
        id: 7,
        title: 'Security',
        path: '/settings/security',
        icon: 'security_icon',
        children: [],
      },
    ],
  },
];

export default sideMenu;
