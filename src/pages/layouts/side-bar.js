import React from 'react';
import CompRender from '../../components/comp-render';

const SideBarLayout = ({leftContent = [], rightContent = []}) => {
  return (
    <div className="flex">
      <div className="w-1/12 h-screen bg-blue-500">
          <CompRender data={leftContent} />
        </div>
        <div className="w-11/12 bg-black border">
          <CompRender data={rightContent} />
        </div>
    </div>
  );
};

export default SideBarLayout;
