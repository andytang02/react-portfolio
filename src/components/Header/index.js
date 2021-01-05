import React from 'react';
import Nav from '../Nav'

function Header(props) {
    const {
        setAboutSelected,
        setPortfolioSelected,
        setContactSelected,
        setResumeSelected
    } = props;
  return (
    <header className = "header">
        <h2 className = "header-name">
            <a className = "header-text" href="/">
                Andy Tang
            </a>
        </h2>
        <Nav         
        setAboutSelected={setAboutSelected}
        setPortfolioSelected={setPortfolioSelected}
        setContactSelected={setContactSelected}
        setResumeSelected={setResumeSelected}></Nav>
    </header>
  );
}

export default Header;