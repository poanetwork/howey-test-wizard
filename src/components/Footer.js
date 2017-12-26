import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="rights">2017 POA Network. All rights reserved.</p>
      <Link className="logo" to='/'></Link>
      <div className="socials">
        <a href="https://twitter.com/poanetwork" className="social social_twitter"></a>
        <a href="https://poa.network" className="social social_oracles"></a>
        <a href="https://t.me/oraclesnetwork" className="social social_telegram"></a>
        <a href="https://github.com/poanetwork/howey-test-wizard" className="social social_github"></a>
      </div>
    </div>
  </footer>
)
