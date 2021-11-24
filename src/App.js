import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://60eedb8ceb4c0a0017bf466f.mockapi.io/items').then(res => {
      setItems(res.data);
    });
    axios.get('https://60eedb8ceb4c0a0017bf466f.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://60eedb8ceb4c0a0017bf466f.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://60eedb8ceb4c0a0017bf466f.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const onAddToFavorite = (obj) => {
    axios.post('https://60eedb8ceb4c0a0017bf466f.mockapi.io/favorites', obj);
    setFavorites(prev => [...prev, obj]);
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const clearInput = () => {
    setSearchValue('');
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}

      <Header onClickCart={() => setCartOpened(true)} />

    </div>
  );
}

export default App;
