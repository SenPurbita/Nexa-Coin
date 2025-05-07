import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation();
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');
  const [savedCoins, setSavedCoins] = useState(() => {
    const saved = localStorage.getItem('savedCoins');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 10;
  const totalPages = Math.ceil(displayCoin.length / coinsPerPage);

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allCoin);
      setCurrentPage(1);
    }
  }

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoin.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(coins);
    setCurrentPage(1);
  }

  const toggleSave = (coinId) => {
    let updated = [];
    if (savedCoins.includes(coinId)) {
      updated = savedCoins.filter(id => id !== coinId);
    } else {
      updated = [...savedCoins, coinId];
    }
    setSavedCoins(updated);
    localStorage.setItem('savedCoins', JSON.stringify(updated));
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  // Pagination slice
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = displayCoin.slice(indexOfFirstCoin, indexOfLastCoin);

  return (
    <div className='home'>
      <div className='hero'>
        <h2>Largest Crypto Marketplace <br /> <b><i><u>NexaCoin</u></i></b> </h2>
        <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
        <form onSubmit={searchHandler}>
          <input onChange={inputHandler} list='coinlist' value={input} type="text" placeholder="search crypto.." required />
          <datalist id='coinlist'>
            {allCoin.map((item, index) => (<option key={index} value={item.name} />))}
          </datalist>
          <button type="submit">Search</button>
        </form>
      </div>

      <div className='nexa-table'>
        <div className='table-layout table-head'>
          <p>★</p>
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H change</p>
          <p className='market-cap'>Market Cap</p>
        </div>

        {
          currentCoins.map((item, index) => (
            <div className="table-layout coin-row" key={item.id}>
              <FaStar
                className={`star-icon ${savedCoins.includes(item.id) ? 'saved' : ''}`}
                onClick={() => toggleSave(item.id)}
              />
              <p>{item.market_cap_rank}</p>
              <Link to={`/coin/${item.id}`} className='coin-link'>
                <div>
                  <img src={item.image} alt="" />
                  <p>{item.name + " - " + item.symbol}</p>
                </div>
              </Link>
              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                {Math.floor(item.price_change_percentage_24h * 100) / 100}%
              </p>
              <p className='market-cap'>
                {currency.symbol}{item.market_cap.toLocaleString()}
              </p>
            </div>
          ))
        }
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? 'active-page' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
