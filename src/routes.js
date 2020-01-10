import React from 'react';

const slowComponent = path => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import(`${path}`)), 5000);
  });
};
const routes = [
  {
    component: React.lazy(() => import('./pages/layouts/root')),
      routes: [
      {
        path: '/',
        exact: true,
        component: React.lazy(() => import('./pages/home')),
      },
        {
          path: '/child/:id',
          component: React.lazy(() => slowComponent('./pages/child')),
            routes: [
            {
              path: '/child/:id/grand-child',
              component: React.lazy(() => import('./pages/grand-child')),
            },
          ],
        },
        {
          component: React.lazy(() => import('./pages/not-found')),
        },
    ],
  },
];

export default routes;
