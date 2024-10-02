import "./BVBNav.css";

const BVBNav = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img
              src="https://www.bvb.de/etc.clientlibs/bvbweb/clientlibs/clientlib-site/resources/images/bvb-logo.svg"
              alt="BVB Logo"
            />
          </div>
          <ul className="nav-links">
            <li>
              <a href="#">Tickets</a>
            </li>
            <li>
              <a href="#">Fanshop</a>
            </li>
            <li>
              <a href="#">BVB-TV</a>
            </li>
            <li>
              <a href="#">Membership</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
          </ul>
          <div className="right-icons">
            <a href="#">
              <i className="user-icon"></i>
            </a>
            <a href="#">
              <i className="search-icon"></i>
            </a>
            <a href="#">
              <i className="menu-icon"></i>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default BVBNav;
