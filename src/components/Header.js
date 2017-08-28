import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="header">
    <div className="container">
      <Link className="logo" to='/'></Link>
    </div>
  </header>
);
