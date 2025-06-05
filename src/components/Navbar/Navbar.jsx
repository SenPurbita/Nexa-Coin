import React, { useContext, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import arrowicon from '../../assets/arrowicon.png';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next'; // ✅ Import this for switching language

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const { t } = useTranslation();

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": setCurrency({ name: "usd", symbol: "$" }); break;
      case "inr": setCurrency({ name: "inr", symbol: "₹" }); break;
      case "eur": setCurrency({ name: "eur", symbol: "€" }); break;
      case "cny": setCurrency({ name: "cny", symbol: "¥" }); break;
      case "gbp": setCurrency({ name: "gbp", symbol: "£" }); break;
      case "krw": setCurrency({ name: "krw", symbol: "₩" }); break;
      case "thb": setCurrency({ name: "thb", symbol: "฿" }); break;
      default: setCurrency({ name: "usd", symbol: "$" }); break;
    }
  };

  useEffect(() => {
    setCurrency({ name: "usd", symbol: "$" });
  }, [setCurrency]);

  const languageHandler = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src={logo} alt="logo" className='logo' /></Link>

      <ul className="nav-links">
        <Link to='/'><li>{t('navbar.home')}</li></Link>
        <Link to='/news'><li>{t('navbar.news')}</li></Link>
        <Link to='/watchlist'><li>{t('Watch List')}</li></Link>
        <Link to='/aboutus'><li>{t('navbar.about')}</li></Link>
      </ul>

      <div className='nav-right'>
        <select onChange={currencyHandler} className='currency-dropdown'>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
          <option value="cny">CNY</option>
          <option value="gbp">GBP</option>
          <option value="krw">KRW</option>
          <option value="thb">THB</option>
        </select>

        {/* ✅ Language Switcher */}
        <select onChange={languageHandler} className='language-dropdown' defaultValue={i18n.language}>
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
        </select>

        <Link to="/signup" className="signup-button">
          {t('navbar.signup')} <img src={arrowicon} alt="arrow" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
