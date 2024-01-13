import React from "react";
// want a link to linkin github need a vision page and contact page about me component
const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <h1>
                    My Media
                </h1>
                <ul>
                    <li> 
                        <a href="https://github.com/aestrella0140">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/adrian-estrella-7a91b42a2/">LinkedIn</a>
                    </li>
                </ul>
            </div>
            <div className="footer">
                <h1>
                    Contact
                </h1>
                <ul>
                    <li>
                        Email: astarfirstborn@hotmail.com
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;