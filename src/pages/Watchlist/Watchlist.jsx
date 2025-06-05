import React, { useEffect, useState, useContext } from 'react';
import './Watchlist.css';
import { Link } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';

const Watchlist = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [savedCoins, setSavedCoins] = useState(() => {
    const saved = localStorage.getItem('savedCoins');
    return saved ? JSON.parse(saved) : [];
  });

  const [watchlistData, setWatchlistData] = useState([]);

  useEffect(() => {
    const coins = allCoin.filter(coin => savedCoins.includes(coin.id));
    setWatchlistData(coins);
  }, [allCoin, savedCoins]);

  const handleDelete = (coinId) => {
    const updatedCoins = savedCoins.filter(id => id !== coinId);
    setSavedCoins(updatedCoins);
    localStorage.setItem('savedCoins', JSON.stringify(updatedCoins));
  };

  return (
    <div className="watchlist">
      <h2>Your Watchlist</h2>
      {watchlistData.length === 0 ? (
        <p>No coins saved yet.</p>
      ) : (
        <div className="watchlist-table">
          <div className="table-header">
            <p>#</p>
            <p>Coin</p>
            <p>Price</p>
            <p>Market Cap</p>
            <p>Action</p>
          </div>

          {watchlistData.map((coin) => (
            <div className="table-row" key={coin.id}>
              <p>{coin.market_cap_rank}</p>
              <Link to={`/coin/${coin.id}`} className="coin-link">
                <div>
                  <img src={coin.image} alt={coin.name} />
                  <span>{coin.name} ({coin.symbol.toUpperCase()})</span>
                </div>
              </Link>
              <p>{currency.symbol}{coin.current_price.toLocaleString()}</p>
              <p>{currency.symbol}{coin.market_cap.toLocaleString()}</p>
              <div className="action-buttons">
                <button onClick={() => handleDelete(coin.id)} className="delete-btn">Delete</button>
                <Link to={`/trade/${coin.id}`}>
                  <button className="trade-btn">Trade</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
