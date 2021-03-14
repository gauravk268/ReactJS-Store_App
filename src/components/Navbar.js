const Navbar = ({ cartItems }) => {
  const countCartItems = cartItems.length;
  return (
    <div className="navbar">
      <div className="navbar-item nav-item brand">
        <a href="/">Store</a>
      </div>
      <div className="navbar-item"> </div>
      <div className="navbar-item navbar-link-wrapper">
        <div className="navbar-link nav-item">
          <a href="/about">About</a>
        </div>
        <div className="navbar-link nav-item">
          <a href="/contact">Contact</a>
        </div>
        <div className="navbar-link nav-item">
          <a href="/cart"> &#128722; {countCartItems}</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
