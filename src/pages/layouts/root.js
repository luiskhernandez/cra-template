import React, {Fragment} from 'react';
import {renderRoutes} from 'react-router-config';
import {NavLink} from 'react-router-dom';
import { useMainRoutes } from '../../contexts';

const Root = ({route}) => {
  const {routes} = useMainRoutes();
  return (
    <Fragment>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 shadow-md">
        <ul className="flex">
          {routes.map( (item, index) => (
            <li key={index} className="mr-6">
              <NavLink className="text-white hover:text-white" to={item.path}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* child routes won't render without this */}
      </nav>
      <div>{renderRoutes(route.routes)}</div>
    </Fragment>
  );
};

export default Root;
