import React from 'react';

function Nav() {

  return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <span>About Me</span>
                </li>
                <li className="mx-2">
                    <span>Portfolio</span>
                </li>
                <li className="mx-2">
                    <span>Contact Me</span>
                </li>
                <li className="mx-2">
                    <span>Resume</span>
                </li>
            </ul>
        </nav>
  );
}

export default Nav;