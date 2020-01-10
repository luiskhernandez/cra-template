import React from "react";
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

const Child = ({ route, match }) => (
  <div>
    <h2>Child</h2>
    <h3>match:</h3>
      <ul>
        <li>
          <Link to="/child/:id/grand-child"> grand child 1</Link>
        </li>
      </ul>
    <pre>{JSON.stringify(match, null, 2)}</pre>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes, { someProp: 'these extra props are optional' })}
  </div>
)

export default Child;
