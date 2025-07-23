import React from 'react';

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">YouTube Clone</h1>
      <input type="text" placeholder="Search..." className="border rounded p-1" />
    </header>
  );
};

export default Header;
