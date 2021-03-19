const Navbar = ({ cartItems }) => {
  const totalCartCount = Object.values(cartItems).reduce(
    (t, { count }) => t + count,
    0
  );

  // const totalCartCount = cartItems.map(
  //   (item) => (totalCartCount += item.count)
  // );

  return (
    // <div className="navbar">
    //   <div className="navbar-item nav-item brand">
    //     <a href="/">Store</a>
    //   </div>
    //   <div className="navbar-item"> </div>
    //   <div className="navbar-item navbar-link-wrapper">
    //     <div className="navbar-link nav-item">
    //       <a href="/about">About</a>
    //     </div>
    //     <div className="navbar-link nav-item">
    //       <a href="/contact">Contact</a>
    //     </div>
    //     <div className="navbar-link nav-item">
    //       <a href="/cart"> &#128722; {totalCartCount}</a>
    //     </div>
    //   </div>
    // </div>

    <div className="navbar">
      <div className="navbar-child navbar-left">
        <div className="navbar-left-child navbar-brand">
          <a href="/">Store</a>
        </div>
      </div>
      <div className="navbar-child navbar-right">
        <div className="navbar-right-child navbar-item">
          <a href="/about">About</a>
        </div>
        <div className="navbar-right-child navbar-item">
          <a href="/contact">Contact</a>
        </div>
        <div className="navbar-right-child navbar-item">
          <a href="/cart"> &#128722; {totalCartCount}</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
