import React, {Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from './routes';
import './styles.css';
import {MainNavProvider} from './contexts';

const navRoutes = [
  {
    title: 'App',
    path: '/',
  },
  {
    title: 'Child 2',
    path: '/child/2',
  },
  {
    title: 'Child 3',
    path: '/child/3',
  },
  {
    title: 'App render',
    path: '/app',
  },
];
const Loading = () => <div>Loading</div>;
export default function App() {
  const [routesTemp] = React.useState(routes);
  const [navConfig, setNavConfig] = React.useState(navRoutes);
  const addRoute = () => {
    const index = navConfig.length;
    setNavConfig([...navConfig, { title: `Child ${index}`, path: `/child/${index}`}]);
  };
  return (
    <div className="flex mb-4 h-screen">
      <div className="w-1/5 p-2 bg-gray-400 text-center">
        <button className="btn btn-blue" onClick={addRoute}>
          {' '}
          Add route{' '}
        </button>
      </div>
      <div className="w-4/5 p-0 text-center">
        <MainNavProvider value={{routes: navConfig}}>
          <Router>
            <Suspense fallback={<Loading />}>
              {renderRoutes(routesTemp)}
            </Suspense>
          </Router>
        </MainNavProvider>
      </div>
    </div>
  );
}
