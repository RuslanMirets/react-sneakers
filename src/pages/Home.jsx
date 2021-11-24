import Card from "./components/Card";

const Home = () => {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && <img className="clear cu-p" onClick={clearInput} src="/img/btn-remove.svg" alt="Clear" />}
          <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
        </div>
      </div>
      <div className="products-list">
        {items.filter((item) => item.title.toLowerCase().includes(searchValue)).map((item, index) => (
          <Card key={index} title={item.title} price={item.price} imageUrl={item.imageUrl}
            onFavorite={obj => onAddToFavorite(obj)} onPlus={obj => onAddToCart(obj)} />
        ))}
      </div>
    </div>
  );
}

export default Home;