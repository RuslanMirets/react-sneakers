import React from "react";
import styles from './Card.module.scss';

const Card = ({ imageUrl, title, price, onFavorite, onPlus }) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img className="mb-15" width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5 className="mb-15">{title}</h5>
      <div className="d-flex justify-between ali  gn-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btn-checked.png' : '/img/btn-plus.svg'}
          alt="Plus" />
      </div>
    </div>
  );
}

export default Card;