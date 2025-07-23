import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-48 bg-gray-100 p-4 hidden md:block">
      <ul>
        <li className="mb-2">Home</li>
        <li className="mb-2">Shorts</li>
        <li className="mb-2">Subscriptions</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
