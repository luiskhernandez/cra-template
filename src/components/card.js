import React from 'react';

const Card = ({title, description, tags, bannerUrl}) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img className="w-full" src={bannerUrl} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 py-4">
      {tags.map((item, index) => (
        <span
          key={index}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default Card;
