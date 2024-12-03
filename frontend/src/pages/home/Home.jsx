import React from 'react';
import "./home.css";
import placeholderImage from '../../assets/facilities_image/image_3.gif'; // プレースホルダー画像のパス
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

      <div className="title">
        <h1 className="opening-title">民宿  神宮寺</h1>


      </div>


      <div className="opening-section">

        <img src={placeholderImage} alt="Opening" className="opening-image" />

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.999789643398!2d140.62324217729625!3d35.677007172588546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022e0ed0ee91a3f%3A0x46373b96c9d2332d!2z44CSMjg5LTI1MjQg5Y2D6JGJ55yM5pet5biC56We5a6u5a-677yT77yZ77yX77yS4oiS77yU77yR!5e0!3m2!1sja!2sjp!4v1727018973417!5m2!1sja!2sjp" width="600" height="450" style="border:0;" 
            width="90%" 
            height="200" 
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
