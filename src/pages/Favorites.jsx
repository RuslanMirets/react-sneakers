import React from 'react';
import AppContext from '../context';
import Card from '../components/Card';

const Favorites = () => {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className="products-list">
        {favorites.map((item, index) => (
          <Card key={index} favorited={true} onFavorite={onAddToFavorite} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
