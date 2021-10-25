function App() {
  return (
    <div className="wrapper clear">

      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30">Корзина</h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div className="cartItemImg" style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}}>
              </div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div className="cartItemImg" style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}}>
              </div>
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>
          </div>
          <ul className="cartTotalBlock">
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logo"/>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex align-center">
          <li className="mr-30 d-flex align-center">
            <img width={18} height={18} src="/img/cart.svg" alt="Cart"/>
            <span>1205 руб.</span></li>
          <li className="d-flex align-center">
            <img width={18} height={18} src="/img/user.svg" alt="User"/>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input type="text" placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex justify-between">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked"/>
            </div>
            <img className="mb-15" width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"/>
            <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
