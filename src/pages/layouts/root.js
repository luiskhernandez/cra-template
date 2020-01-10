import React from 'react';
import {renderRoutes} from 'react-router-config';
import {Link} from 'react-router-dom';

const Root = ({route}) => (
  <div>
    <h1>Root</h1>
    <ul>
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/child/1"> Child 1 (slow component)</Link>
      </li>
    </ul>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

export default Root;
