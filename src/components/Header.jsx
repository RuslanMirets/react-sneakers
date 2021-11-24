import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex align-center">
        <li className="mr-30 d-flex align-center cu-p" onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
          <span>1205 руб.</span>
        </li>
        <Link to="/favorites">
          <li className="d-flex align-center cu-p mr-20">
            <img width={18} height={18} src="/img/heart.svg" alt="Favorites" />
          </li>
        </Link>
        <li className="d-flex align-center cu-p">
          <img width={18} height={18} src="/img/user.svg" alt="User" />
        </li>
      </ul>
    </header>
  );
}

export default Header;