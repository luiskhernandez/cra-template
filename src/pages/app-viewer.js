import React from 'react';
import CompRender from '../components/comp-render';

const body = [
  {
    component: React.lazy(() => import('./layouts/side-bar')),
    props: {
      rightContent: [
        {
          component: 'div',
          props: {className: 'bg-red-500'},
          children: [
            {
              component: 'ul',
              props: {},
              children: [...Array(5).keys()].map((item, index) => ({
                component: 'li',
                props: {},
                children: [
                  {
                    component: 'a',
                    props: {},
                    children: `item ${index}`,
                  },
                ],
              })),
            },
            {
              component: React.lazy(() => import('../components/button')),
              props: {
                className:
                  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
                onClick: () => alert('cambio'),
              },
            },
            {
              component: React.lazy(() => import('../components/card')),
              props: {
                title: 'The Coldest Sunset',
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
                tags: ['photography', 'travel', 'winter'],
                bannerUrl: 'https://tailwindcss.com/img/card-top.jpg',
              },
            },
          ],
        },
      ],
    },
  },
];
const App = () => {
  return <CompRender data={body} />;
};

export default App;
