import React from 'react';

const createComponent = children => {
  if (children === null || children === undefined) {
    return null;
  }
  switch (typeof children) {
    case 'string':
      return children;
    case 'object':
      return children.map((item, index) => {
        return React.createElement(
          item.component,
          {key: index, ...item.props},
          createComponent(item.children),
        );
      });
  }
};

const CompRender = ({data}) => {
  return (
    <React.Fragment>
      {data.map((item, index) => {
        return React.createElement(
          item.component,
          {key: index, ...item.props},
          createComponent(item.children),
        );
      })}
    </React.Fragment>
  );
};

export default CompRender;
