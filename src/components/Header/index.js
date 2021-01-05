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
    <header className = "flex-row">
        <h2 className = "col-12">
            <a href="/">
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