import styles from './Card.module.scss';

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked"/>
      </div>
      <img className="mb-15" width={133} height={112} src={props.imageUrl} alt="Sneakers"/>
      <h5 className="mb-15">{props.title}</h5>
      <div className="d-flex justify-between ali  gn-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className="button" onClick={props.onClick}>
          <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
        </button>
      </div>
    </div>
  );
}

export default Card;