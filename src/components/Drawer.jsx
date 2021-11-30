const Drawer = ({ onClose, onRemove, items = [] }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img className="cu-p" onClick={onClose} src="/img/btn-remove.svg" alt="Close" />
        </h2>

        {
          items.length > 0 ? (
            <div className="d-flex flex-column" style={{ height: "100%" }}>
              <div className="items">
                {items.map(obj => (
                  <div className="cartItem d-flex align-center mb-20" key={obj.id}>
                    <div className="cartItemImg" style={{ backgroundImage: `url(${obj.imageUrl})` }}>
                    </div>
                    <div className="mr-20">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price} руб.</b>
                    </div>
                    <img className="removeBtn" onClick={() => onRemove(obj.id)} src="/img/btn-remove.svg"
                      alt="Remove" />
                  </div>
                ))}
              </div>
              <div className="cartTotalBlock">
                <ul>
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
                <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
              </div>
            </div>
          ) : (
            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
              <img className="mb-20" width={120} height={120} src="/img/cart-empty.jpg" alt="Empty" />
              <h2>Корзина пустая</h2>
              <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
              <button className="greenButton" onClick={onClose}>
                <img src="/img/arrow.svg" alt="Arrow" />
                Вернуться назад
              </button>
            </div>
          )
        }

      </div>
    </div>
  );
}

export default Drawer;