import axios from 'axios';
import React from 'react';
import AppContext from '../context';
import Info from './Info';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onClose, onRemove, items = [] }) => {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://60eedb8ceb4c0a0017bf466f.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://60eedb8ceb4c0a0017bf466f.mockapi.io/orders/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Error');
    }
    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img className="cu-p" onClick={onClose} src="/img/btn-remove.svg" alt="Close" />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column" style={{ height: '100%' }}>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20" key={obj.id}>
                  <div
                    className="cartItemImg"
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  />
                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    className="removeBtn"
                    onClick={() => onRemove(obj.id)}
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
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
              <button disabled={isLoading} className="greenButton" onClick={onClickOrder}>
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={isOrderComplete ? '/img/complete-order.jpg' : '/img/cart-empty.jpg'}
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
