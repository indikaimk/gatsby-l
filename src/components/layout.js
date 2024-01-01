import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({children}) => {
  return (
    <div>
      <header>
        <div>
          <div>
            <h1>Liyum</h1>
          </div>
          <nav>
            <ul>
              <li><Link to="/log-in">Log in</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout