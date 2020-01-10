import React, {Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from './routes';

const Loading = () => <div>Loading</div>;

export default function App() {
  return (
    <Router>
      {/* kick it all off with the root route */}
      <Suspense fallback={<Loading />}>{renderRoutes(routes)}</Suspense>
    </Router>
  );
}
