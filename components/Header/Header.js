import React from 'react';

const Header = ({ children }) => (
  <>
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">test app Crello</div>
    </nav>
    {
      children
    }
  </>
); 

export default Header;