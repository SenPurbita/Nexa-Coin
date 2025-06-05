import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TechnicalAnalysis.css';

const TechnicalAnalysis = () => {
  const { coinId } = useParams();
  const containerRef = useRef(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const symbolMap = {
    bitcoin: "BINANCE:BTCUSDT",
    ethereum: "BINANCE:ETHUSDT",
    solana: "BINANCE:SOLUSDT",
    cardano: "BINANCE:ADAUSDT",
    ripple: "BINANCE:XRPUSDT",
    dogecoin: "BINANCE:DOGEUSDT",
    litecoin: "BINANCE:LTCUSDT",
    polkadot: "BINANCE:DOTUSDT",
    avalanche: "BINANCE:AVAXUSDT",
    chainlink: "BINANCE:LINKUSDT",
    tron: "BINANCE:TRXUSDT",
    polygon: "BINANCE:MATICUSDT",
    uniswap: "BINANCE:UNIUSDT",
    stellar: "BINANCE:XLMUSDT",
    vechain: "BINANCE:VETUSDT",
    // Add more as needed
  };

  useEffect(() => {
    if (!window.TradingView) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;

      script.onload = () => setScriptLoaded(true);

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else {
      setScriptLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (scriptLoaded && window.TradingView && containerRef.current) {
      containerRef.current.innerHTML = ''; // Clear previous widget

      const selectedSymbol = symbolMap[coinId.toLowerCase()] || "BINANCE:BTCUSDT";

      new window.TradingView.widget({
        container_id: containerRef.current.id,
        width: "100%",
        height: 700,
        symbol: selectedSymbol,
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        studies: ["MACD@tv-basicstudies", "RSI@tv-basicstudies"],
        autosize: true,
      });
    }
  }, [scriptLoaded, coinId]);

  return (
    <div className="tech-analysis-container">
      <h2 className="tech-title">📊 Technical Analysis for {coinId.toUpperCase()}</h2>
      <div id="tradingview_chart" ref={containerRef}></div>
    </div>
  );
};

export default TechnicalAnalysis;
