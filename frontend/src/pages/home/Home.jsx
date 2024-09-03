import React from 'react';
import "./home.css";
import placeholderImage from '../../assets/facilities_image/1.gif'; // プレースホルダー画像のパス
import {Link} from "react-router-dom"


const newsData = [
  { id: 1, date: '2024/9/9', title: '【民宿】おとこのこのかくれが オープン' ,link: './news/news.jsx' },
  { id: 2, date: '2024/9/10', title: 'ダーツ台の設置が完了しました' },
  { id: 3, date: '2024/9/10', title: 'お得なプランを設定しました' },
  { id: 4, date: '2024/9/10', title: 'カラオケを遊べるようになりました。' },
  { id: 5, date: '2024/9/10', title: '「おとこの子のかくれが」について' },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* オープニングセクション */}
      <div className="opening-section">
        <img src={placeholderImage} alt="Opening" className="opening-image" />
        <h1 className="opening-title">ようこそ！おとこのこのかくれがへ</h1>
      </div>

      {/* ニュースセクション */}
      <div className="news-section">
        <h1 className="section-title">ニュース</h1>
        <div className="news-list">
          {newsData.map(news => (
            <div key={news.id} className="news-item">
              <a href={news.link} className="news-link">
                <p>{news.date} - {news.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>


      {/* 紹介セクション */}
      <div className="introduction-section">
        <h1 className="section-title">紹介</h1>
        <p>千葉県旭市にひっそり立つ、小さな民宿。おとこの子が好きな要素をオーナーが詰め込みました。.....</p>
      </div>

      {/* アクセスセクション */}
      <div className="access-section">
        <h1 className="section-title">アクセス</h1>
        {/* グーグルマップをここに埋め込む */}
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531572!3d-37.81627917975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43d1e034fb%3A0x506f7f24cfb6e9b0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1618533193151!5m2!1sen!2sus" 
            width="100%" 
            height="300" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy">
          </iframe>
        </div>
      </div>

      <div className="introduction-section">
        <h1 className="section-title">お問い合わせ</h1>

        




      </div>

    </div>
  );
}

export default Home;
