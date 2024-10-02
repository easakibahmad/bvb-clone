import "./index.css";

const BeautyCurveHome = () => {
  return (
    <div>
      <header className="beauty-curve__header">
        <nav className="beauty-curve__navbar">
          <div className="beauty-curve__logo">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAABHVBMVEX///8REiSwN4eCMnlNCVYAAADa2tsODyJLAFSvN4eyN4eALneAMngAABcAABwAABpCAEwAABWuL4Q7AEZLAFWsJIBDAE2HMnqQM30ZGiyUlJrx3+qrHH7v6/B9I3N8JXNBQUwgITD79/royt3BbaPr0uE4AENjMWqehaK3T5Lj1eJ4Fm+MRIWrlq/26vGcNIHJr8ZjJ2uWV4+cnKB5eYFZWmMpKjhqanIAAAx9fYVMTVenp6w0NUDTmr6/ZJ+3SZTIfa7crMrOkLjivNPbrsvFeKq9W5rTx9VvRHbFtsh8VIG3pbqKbY97WYCum7G4lbWpeqSfZZfDpb+tgqjWy9ega5laKWNSGFpbFmQoADeNS4WoWpbDxchgYWi1trdR9o8iAAAKAElEQVR4nO2cC1vaSBfHJVxCuCSAIjJASGJvgiLlFoO42vq21Lrvequ7XVf8/h/jnckFQyQBu8CQvOf3lAI2T3v+PZc5czKwsQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAElwZtA5bFCW0DlkTpN9oWLImTU9oWLIk9hrYFy+FtOUfbhOVwlsvTNmEpKGUmmMJOckwgQ1HhEkyCthHL4FOeYYJY7hWOYXJBXKBPsMNyX2hbsXgUrIvJBbBXfJPDwvKfaJuxcM6Jw5j8Lm07Fg2pHJhy4PZjv+V0YZxC25AFc6IHIpN7Q9uQBbNr6GJyn2lbslhKRhwGrnY0GEtYLlC1Qzm1dDF7tG1ZJMreWFegUqzx7C+m/Ja2NYvDrosr07ZmcZQSz7qY3BltcxbGeZ6xUQ5Msf9U5uzCAtNPfZnwV2BqYslWNoy2o0TbpIVwnnPoyn2lbdJCOJsMQ+Kw/9C2aQGUTl/oYvIBKB2fnGEYjNKhvMlzL3QxZd+Xjt0p7grCQPFzeYosnGE+738bX19WDd1hPh9tv50ahozvZwLn08MQO8zfW+eT6WHI+L2v/+yqy9/dlLsuf2eYhy5fO8xDl68d9smtHjLmGjb8QNvEX+J8WndowulDt2/vDmgb+QuUXJZlw2HkDstwM7J5QdvMV6M4hwCTGUba+vfxSDxeoW3oaznzdNgZvuIiE4lEtr/TNvSVnHsURMNhCnYYxmfB2PCSZWycLzeJrkg8QtvWV/HFKxD1SYeypTvMZy5767GCYV3EYQcZQ1ck7qcs86yIDIMdVtk2HYaV+acwzqgc5ITRh21LVyRzSdveudnz9Be5DVGJjx0W2f6dtr3zMsNh5OTU788Oi8Tf+2Vq+tUzw8g52UomYmPLJ0lW8i6JTofhgu8TYd7NFMmwxmbEj8K81+aXDvOLsF3P0sE4SqJe7/0hzDsSSdPxYdJhWz/9URX3PIRx5Myl02Hx/9I2eS5KXpGo3175Y6LWk3Xs4sOa3E5SShfNq+ub1sM+5uHm+qrZrFnh5Lk665OOrS2HsG+XNZpqDJTa7fV+vS6KYjVpUa2KYr0evr8a4gs+e0SiPku8mKz1WNhf1HOsdnsfrmNF4Wkkk+LDhvdOTK/13+MOYbSbxdLVvigmp4syqF5veDfAOb10OHXhek9vvqg0W3UXT9mEXeELvSKRzNwOMi+FRTKUfFa5CouzVFnCPBrF/Dn+u75N8RhW9o3CIl25q4qzVRFht7gN9BJGug5n6bAqSGTVlbFyVa/OJcvwmEdrr9dE5yL2rCzzY6W6bsPzeWseYdNrosXWKmcftdY8uTUWducpTF+dXSKRsL262nhVf4UsvJLdTMmx5zsuOZxiPzyErWwOV2rNH4WGsIcpVXEsTL8jdumWYljX5oqSrDlz3XohbF95uY4djoWRHYtji2lj8/2KdN29Lgx1xNLLzmMsTO+npq9ixF/D1chS7l8ZhoawC/PDiVOFkZvOf7oIi39cka6HedeuCUhZdHb3O1aukSN8lb/cPLaauUcl/PowJJAkc+7HLGH6PbHGlouuyPYq5tyNX9QVDtdrzh00V7DKImnta67L8yoWsYbn3sQT0ntMzjzmFBbfXH6r+KtxqCO+SLKxsLyXsBVMuZWHf6GL1MXdieMdiYJVFo0cc6uKyz/wcfNL9dAi2XJMghM7O2bzQc7JKq5V8d2yQ/GOrF/JZJVMa8iQRpwxDnBSH07GYuIwbHmMbDPfu5XFZZf7Zj2crNbDN3fNYa1RaTRKteHtdSs5eyxgc9lkg3+YMiNT/6oEt13Lsu9q1kSx3rqqOf/3GsO78LzbTbE52XxwKTPJ9GHpgUuvuOTxvRLev3X7F2rX4nx7M1F5W07YhIUL5jsO/y1Dl+5+yZHY9Mxg5fZhnsa4ej/pskLYjEXSUynvXIRRPuxx0ZpDmtgs2Sv+YeowMTPJtqmf7xvuz5SWFEv2W0lcynIZ+c6fFwNuU9gaHMls7s/KtWS4YfNYomC5zGMly1D32AbJteSMCpls2Xr8xGHKXMr0w3yTk+B4PL6FH5nIetzUrFzPiMfqvS0YudS44pPZ/XNXFc+82/r48efWz+9/rIeuDTKX85ZWbZ0+u2zHyrLJ02Hb34fU7x9Noek9SU0W7OUjZW43SYe/ETFcRvEWizeK97gntWN3mRmMevcx1Ney+DfaAtwpec6JbcpwxTeCkdM/qKPP4NaiDrqCS39qDmWkMJqheaqYp4Ez632wVPG6F5PaSViD4IL+xqofpUx8/U8pNu7dUy01ngvg+mEqK5Nt2XCT9o3nefAo/bjOJ4g2jgSjWUD0zxJcZuJ/rmOtd+DRQFprM1nMDJ/l9oiig83Mioba/w73BnIcjoWUWU6MD9N+eOeT09tN180adhrxFIeVhQscfpnXvxPt4G9fuAwzvKlXpxb/VEGXxhXIG9Lp58/I9ZdxygbPT+muOj0idWkJ7DMSjthphrKL9S+MY5Rma/poJBU+5BKkgoRxe8UlDGU/1nuRdtC4bdWnacPNxyF3mDL8xxl5Vlmb7cp8NJo3+vE4p7RUqlAwRe7kvvpgHZtG7fb+IVnXD/859CWNQbP4j0+VYSq15tV1KyzWdUTjWSy07u9uhyX/f/mgolRKtdpwONz9UatVFMW/jgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P+MWEDZiAaUjVBAAWF+wxTGmo+Q7TkUEvgQ+/wOv2KF57drjiGMldgQ2ysarwfWn6W73WxvYEkp9llW7g78oswQxqsjIY3S2XQonY2iopDNCkI2eoxR29FsNMoK0egghh+a5C9hrIyystZBWlRDHQ0NEOpI7X6sH42qlS6KxXpSLNZ/lPDzaj3Gs6yRAPiJ5VlBTwf9R/or8oa8FAQeX8LjC9IsPyEslEUhVe2kO6oajWo8CkU7ne6R9BjTVNR7jI6OHwfRXiUmCOxKdbGa0OF5Xu7LxRBbRGpf6PFCscMWBZmVWfKrpyJNPVa10XFPQiMkHR+hrmAXJoy6WheN1I4kZDW2fZRVtT5/FOVjGuo/RQdPj0dZLExecRymtU73sY0t7yJsv9Z/GmkIxxXi+4j8BLUR9sVI0LIIHSEsEXWQ9KSl7cJY9rgjI7bXQ6w8GqndEOr2+baKSPjF1McOeupIj/3Y0WqFsdLT4HiEPdFtt1FRxTq0dlvVkDTCkYS0QQd1eh2kStKxhtTjWLHdf+qjdtYuDJcPme+hjoAfR2pURTIuh32kpbNYIBplj3BIqtHOqkuH0BN6MiulBz1ZZgdysSixrCQXB7wUGshyUZYlXuJ7gtRnpeyRLGOT8ZXshDCcpyE2LegPIcSnSYry2TQbwmmVxQkpZHHqrn4VY0mtsP02fh0yX4ZY6xr9nV5mJoUFDRDmNwIr7H83M0aDxnrlRQAAAABJRU5ErkJggg=="
              alt="Leospa Logo"
            />
          </div>
          <ul className="beauty-curve__nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Feature</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="beauty-curve__hero">
        <div className="beauty-curve__hero-content">
          <h4>Spa & Beauty Center</h4>
          <h1>Beauty and success starts here.</h1>
          <p>
            Together creeping heaven upon third dominion be upon won’t darkness
            rule behold it created good saw after she’d our set living.
          </p>
          <div className="beauty-curve__cta-buttons">
            <a href="#" className="beauty-curve__btn-primary">
              Reserve Now
            </a>
            <a href="#" className="beauty-curve__watch-story">
              <span className="beauty-curve__play-icon">▶</span> Watch our story
            </a>
          </div>
        </div>
        <div className="beauty-curve__hero-image">
          <img
            src="https://media.istockphoto.com/id/1149534512/photo/fresh-skin.jpg?s=612x612&w=0&k=20&c=LGLSnKFmLQRLPvi-krprLE-OM2ideeTAOGoAS9VkO5w="
            alt="Spa Woman"
          />
        </div>
      </section>
    </div>
  );
};

export default BeautyCurveHome;
