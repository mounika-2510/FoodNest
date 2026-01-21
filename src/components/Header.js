const logo = new URL("../assets/logo.png", import.meta.url);
// import.meta.url gives the current file location
//new URL helps parcel resolve and bundle the image correctly

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} className="logo" alt="FoodNest Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
