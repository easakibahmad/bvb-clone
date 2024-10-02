import { Link, Outlet } from "react-router-dom";

import "./index.css";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__links">
        <Link className="layout__link" to="bvb-nav">
          BVBNav
        </Link>
        <Link className="layout__link" to="nav-lg-dropdown">
          NavLgDropdown
        </Link>
        <Link className="layout__link" to="sa-burger">
          SABurger
        </Link>
        <Link className="layout__link" to="beauty-curve-home">
          BeautyCurveHome
        </Link>
        <Link className="layout__link" to="kmp-algo">
          KMPAlgo
        </Link>
      </div>

      <div className="layout__outlet">
        <Outlet />
      </div>
      <div className="layout__footer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anti-copyright.svg/2048px-Anti-copyright.svg.png"
          alt="copyright"
        />

        <p>Sakib Ahmad</p>
        <Link to={`https://github.com/easakibahmad`} target="_blank">
          <img
            src="https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png"
            alt="git"
          />
        </Link>
      </div>
    </div>
  );
};

export default Layout;
