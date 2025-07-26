import React, { useState, useEffect } from 'react';
import './home.css';

import logoImage from '../../assets/facilities_image/rogo.jpg';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('.features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="home-container">
      {loading ? (
        <div className="loading-screen">
          <div className="loader"></div>
          <p className="loading-text">Now loading...</p>
        </div>
      ) : (
        <>
          <header className="header">
            <img src={logoImage} alt="みんなの隠れ家のロゴ" className="header-logo" />
            <p className="header-subtitle">海風のあたる貸し切りの民宿で、休日のひとときを</p>
          </header>

          <main>

            <section className="news-section">
              <h2 className="section-title">最新ニュース</h2>
              <ul className="news-list">
                <li><a href="#news1">2025/02/01 - 夏の宿泊プランご予約受付開始！</a></li>
                <li><a href="#news2">2025/01/25 - BBQセット設置！</a></li>
                <li><a href="#news3">2025/01/10 - ＜重要＞ご宿泊への注意点</a></li>
              </ul>
            </section>

            <section className="introduction-section">
              <h2 className="section-title">宿の秘密</h2>
              <p className="intro-text">他の民宿にはない不思議な機材。そして、使えるのならばなんでも使っていいという。大適当な民宿とその大家</p>
            </section>

            <h2 className="section-title">大家のこだわり</h2>
            {/* スライドショーセクション */}
            <section className="slideshow-section">
              <div className="img-frame">
                <div className="img-01"></div>
                <div className="img-02"></div>
                <div className="img-03"></div>
              </div>
            </section>


            <section className="tourism-section">
              <h2 className="section-title">お客様の声</h2>
              <p className="tourism-text">
                九十九里浜は、千葉県に位置する美しい海岸線で、海水浴やサーフィンに最適なスポットです。 
                その広大な砂浜と青い海は、訪れる人々を魅了し、リラックスした時間を提供します。 
                また、地元の新鮮な海産物を楽しむこともでき、観光客にとって魅力的なエリアです。
              </p>
            </section>

            <section className="access-section">
              <h2 className="section-title">アクセス</h2>
              <p className="access-text">
                最寄り駅からバスで30分。電車やバスで起こしのお客様には無料送迎車をご利用いただけます
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.9997896433915!2d140.6232421755915!3d35.6770071725887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022e0ed0ee91a3f%3A0x46373b96c9d2332d!2z44CSMjg5LTI1MjQg5Y2D6JGJ55yM5pet5biC56We5a6u5a-677yT77yZ77yX77yS4oiS77yU77yR!5e0!3m2!1sja!2sjp!4v1738385119846!5m2!1sja!2sjp"
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
                className="map"
              ></iframe>
            </section>
          </main>

          <footer className="footer">
            <p>© 2025 みんなの隠れ家 - All Rights Reserved.</p>
            <nav>
              <ul className="footer-links">
                <li><a href="#reservation">予約</a></li>
                <li><a href="#contact">お問い合わせ</a></li>
                <li><a href="#faq">よくある質問</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              </ul>
            </nav>
          </footer>
        </>
      )}
    </div>
  );
};

export default Home;
