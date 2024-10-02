import "./NavLgDropdown.css";

const NavLgDropDown = () => {
  return (
    <div>
      <header className="top-nav">
        <img
          src="https://www.bvb.de/etc.clientlibs/bvbweb/clientlibs/clientlib-site/resources/images/bvb-logo.svg"
          alt="BVB Logo"
          className="logo"
        />
        <ul>
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
        <div className="top-nav-icons">
          <a href="#" className="icon">
            User
          </a>
          <a href="#" className="icon">
            Search
          </a>
          <a href="#" className="icon">
            Language
          </a>
        </div>
      </header>

      <div className="container">
        <nav className="sidebar">
          <ul>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Match schedule</a>
            </li>
            <li>
              <a href="#">Tickets</a>
            </li>
            <li>
              <a href="#">Borussia Dortmund</a>
            </li>
            <li>
              <a href="#">Fans</a>
            </li>
            <li>
              <a href="#">SIGNAL IDUNA PARK</a>
            </li>
            <li>
              <a href="#">Sponsoring & Hospitality</a>
            </li>
          </ul>
        </nav>

        <div className="content">
          <div className="top-right">
            <div className="image-card">
              <img
                src="https://s7g10.scene7.com/is/image/BORUSSIADORTMUNDGMBHANDCOKGAA/BVB_Kader_23_240026_RGB?qlt=85&wid=1440&ts=1715581674588&dpr=off"
                alt="First Team"
              />
              <a href="#">FIRST TEAM</a>
            </div>
            <div className="image-card">
              <img
                src="https://www.bvb.de/adobe/dynamicmedia/deliver/dm-aid--45d8d00d-fe3e-4939-9014-e48a7b7d6027/match-detail.jpg?width=1440&quality=85&preferwebp=true"
                alt="Fans"
              />
              <a href="#">FANS</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLgDropDown;
