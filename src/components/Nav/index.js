import React from 'react';

function Nav(props) {
    const {
        setAboutSelected,
        setPortfolioSelected,
        setContactSelected,
        setResumeSelected
    } = props;
  return (
        <nav className = "nav">
            <ul className="nav-menu">
                <li className="nav-element">
                    <span className="nav-text" onClick={() => {
                        setAboutSelected(true);
                        setPortfolioSelected(false);
                        setContactSelected(false);
                        setResumeSelected(false);}}>About Me</span>
                </li>
                <li className="nav-element">
                    <span className="nav-text" onClick={() => {
                        setAboutSelected(false);
                        setPortfolioSelected(true);
                        setContactSelected(false);
                        setResumeSelected(false);}}>Portfolio</span>
                </li>
                <li className="nav-element">
                    <span className="nav-text" onClick={() => {
                        setAboutSelected(false);
                        setPortfolioSelected(false);
                        setContactSelected(true);
                        setResumeSelected(false);}}>Contact Me</span>
                </li>
                <li className="nav-element">
                    <span className="nav-text" onClick={() => {
                        setAboutSelected(false);
                        setPortfolioSelected(false);
                        setContactSelected(false);
                        setResumeSelected(true);}}>Resume</span>
                </li>
            </ul>
        </nav>
  );
}

export default Nav;