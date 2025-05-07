import React, { useEffect, useState } from 'react';
import './News.css';
import { useTranslation } from 'react-i18next'
const CryptoNews = () => {
  const { t } = useTranslation();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = 'pub_84465a4265661eb21660ab7fc84ae30eab2da&q=NFT&removeduplicate=1';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=cryptocurrency&language=en&category=business`
        );
        const data = await response.json();
        setNews(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="crypto-news-container">
      <h2>Latest Cryptocurrency News</h2>
      {loading ? (
        <p className="loading">Loading news...</p>
      ) : (
        <div className="news-grid">
          {news && news.length > 0 ? (
            news.map((item, index) => (
              <div className="news-card" key={index}>
                {item.image_url ? (
                <img
                  src={item.image_url}
                  alt={item.title}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x180?text=No+Image';
                  }}
                />
              ) : (
                <img src="https://via.placeholder.com/300x180?text=No+Image" alt="No image" />
              )}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            ))
          ) : (
            <p className="no-news">No news found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CryptoNews;
