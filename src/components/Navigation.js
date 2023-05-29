import logo from "../assets/logo.svg";

const Navigation = ({ account, setAccount }) => {
  <nav>
    <ul className="nav__links">
      <li>
        <a href="#">Buy</a>
      </li>
      <li>
        <a href="#">Sell</a>
      </li>
      <li>
        <a href="#">Rent</a>
      </li>
    </ul>

    <div className="nav__brand">
      <img src={logo} alt="Logo" />
      <h1>UnBroker</h1>
    </div>

    <button type="button" className="nav__connect">
      0x0...
    </button>
  </nav>;
};

export default Navigation;
