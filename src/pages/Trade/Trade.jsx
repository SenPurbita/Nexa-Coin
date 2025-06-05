import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Trade.css';

const Trade = () => {
  const { coinId } = useParams();
  const navigate = useNavigate();

  const [showBuyOptions, setShowBuyOptions] = useState(false);
  const [showSellOptions, setShowSellOptions] = useState(false);

  const toggleBuyOptions = () => {
    setShowBuyOptions(!showBuyOptions);
    setShowSellOptions(false);
  };

  const toggleSellOptions = () => {
    setShowSellOptions(!showSellOptions);
    setShowBuyOptions(false);
  };

  const handleNavigate = (actionType) => {
    navigate('/signup', { state: { coinId, actionType } });
  };

  return (
    <div className="trade-page">
      <h2>Trade {coinId?.toUpperCase()}</h2>
      <p className="subtitle">Select your action:</p>
      <div className="trade-buttons-container">
        {/* Buy Block */}
        <div className="action-block">
          <button onClick={toggleBuyOptions} className="main-btn buy-btn">Buy</button>
          <div className={`dropdown ${showBuyOptions ? 'open' : ''}`}>
            <button onClick={() => handleNavigate('buy-binance')} className="option-btn">Buy on Binance</button>
            <button onClick={() => handleNavigate('buy-credit')} className="option-btn">Buy with Credit Card</button>
            <button onClick={() => handleNavigate('buy-debit')} className="option-btn">Buy with Debit Card</button>
            <div className="qr-section">
              <button onClick={() => handleNavigate('buy-nexa')} className="option-btn">Buy on NexaCoin.com</button>
              <div>
                <p>Scan QR to Buy</p>
                <img
                  className="qr-img"
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://nexacoin.com"
                  alt="Buy NexaCoin QR"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sell Block */}
        <div className="action-block">
          <button onClick={toggleSellOptions} className="main-btn sell-btn">
            Sell
          </button>
          <div className={`dropdown ${showSellOptions ? 'open' : ''}`}>
            <button onClick={() => handleNavigate('sell-wallet')} className="option-btn">
              Sell with Nexacoin Wallet
            </button>
            <button onClick={() => handleNavigate('sell-binance')} className="option-btn">
              Sell on Binance
            </button>
            <button onClick={() => handleNavigate('sell-gemini')} className="option-btn">
              Sell with Gemini
            </button>
            <button onClick={() => handleNavigate('sell-nexacoin')} className="qr-sell-btn">
              Sell on NexaCoin.com (Scan QR)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
