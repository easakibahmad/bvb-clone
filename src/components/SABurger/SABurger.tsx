import "./SABurger.css";

const SABurger = () => {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <ul>
            <li>
              <a href="#" className="active">
                Burgers
              </a>
            </li>
            <li>
              <a href="#">Specials</a>
            </li>
            <li>
              <a href="#">Jumbos</a>
            </li>
            <li>
              <a href="#">Appetizers</a>
            </li>
            <li>
              <a href="#">Salads</a>
            </li>
            <li>
              <a href="#">Desserts</a>
            </li>
            <li>
              <a href="#">Drinks</a>
            </li>
          </ul>
        </div>
        <div className="main-content">
          <div className="text-content">
            <h1>
              <span className="highlight">SA</span> Burger
            </h1>
            <p className="subtext">A TASTE OF HOME</p>
            <p className="description">
              Some flavours are nice and others make history. We are known for
              something. It is for making burgers for real meat-lovers.
              <br />
              100% beef hamburger, American cheese, bacon, tomato, lettuce, and
              TGB sauce.
            </p>
          </div>
          <div className="burger-image">
            <img
              src="https://thegoodburger.com/assets/web/img/home-bg.png"
              alt="Burger Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SABurger;
