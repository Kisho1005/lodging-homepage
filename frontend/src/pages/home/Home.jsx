import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './home.css';
import './sections.css';
import './buttons.css';

import logoImage from '../../assets/facilities_image/rogo.jpg';
import bbqImage from '../../assets/facilities_image/BBQ.jpg';
import songImage from '../../assets/facilities_image/song.jpg';
import dartsImage from '../../assets/facilities_image/darts.jpg';
import woodTexture from '../../assets/facilities_image/wood-texture.jpg';
import tourism1 from '../../assets/facilities_image/1.gif';
import nightImage from '../../assets/facilities_image/Night.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // カレンダー用の日付データを生成（30日分）
  const generateCalendar = () => {
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // 今週の日曜日から開始
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - today.getDay());
    
    // 30日分の日付を生成
    for (let i = 0; i < 30; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      days.push({
        date: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        isAvailable: false, // 現在は全て満室
        fullDate: date.toISOString().split('T')[0],
        isPast: date < today
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendar();

  const scrollToFacilities = () => {
    const facilitiesSection = document.querySelector('.features-modern-section');
    if (facilitiesSection) {
      facilitiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToRoomStatus = () => {
    const roomSection = document.querySelector('.room-status-section');
    if (roomSection) {
      roomSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ローディング画面を削除して直接メインコンテンツを表示
  return (
    <div className="home-container">
      <motion.nav 
        className="modern-nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ 
          backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
          background: scrollY > 50 ? 'rgba(26, 26, 26, 0.8)' : 'transparent'
        }}
      >
        <motion.div 
          className="logo-container"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={logoImage} alt="ロゴ" className="logo-image" />
        </motion.div>
        <div className="nav-links">
          <button onClick={scrollToFacilities} className="nav-link nav-button">施設</button>
          <button onClick={scrollToRoomStatus} className="nav-link nav-button">空室</button>
          <Link to="/contact" className="nav-link contact-nav">予約</Link>
        </div>
      </motion.nav>

      <main className="main-content">
        <section 
          className="hero-section"
        >
          <div className="hero-background">
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="badge-text">Premium Lodging</span>
            </motion.div>
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              みんなの<span className="highlight">隠れ家</span>
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              海風のあたる貸し切りの民宿で、<br/>心に残る休日のひとときを
            </motion.p>
            <motion.div
              className="hero-cta-group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Link to="/contact" className="cta-button primary">予約する</Link>
              <button onClick={scrollToFacilities} className="cta-button secondary">施設を見る</button>
            </motion.div>
            <motion.div
              className="scroll-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <span>Scroll</span>
              <div className="scroll-line"></div>
            </motion.div>
          </div>
        </section>

        <motion.section 
          className="features-modern-section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="section-inner">
            <motion.div className="section-header" variants={fadeInUp}>
              <span className="section-label">What We Have</span>
              <h2 className="section-title-modern">今使えるもの</h2>
              <p className="section-description">そして、みんなで増やしていくもの</p>
            </motion.div>
            <div className="features-grid-modern">
              <motion.div 
                className="feature-card-modern"
                variants={fadeInUp}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="feature-image-wrapper">
                  <img src={bbqImage} alt="BBQ設備" className="feature-image-modern" />
                  <div className="feature-overlay">
                    <span className="feature-icon">🔥</span>
                  </div>
                </div>
                <div className="feature-content-modern">
                  <h3 className="feature-title-modern">BBQ設備</h3>
                  <p className="feature-description-modern">
                    現在使えます。海を眺めながら楽しめるスペース。<br/>
                    備品や調味料など、寄付でさらに充実中！
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="feature-card-modern"
                variants={fadeInUp}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="feature-image-wrapper">
                  <img src={songImage} alt="カラオケ" className="feature-image-modern" />
                  <div className="feature-overlay">
                    <span className="feature-icon">🎤</span>
                  </div>
                </div>
                <div className="feature-content-modern">
                  <h3 className="feature-title-modern">カラオケ</h3>
                  <p className="feature-description-modern">
                    現在使えます。最新の設備で盛り上がれます。<br/>
                    曲のリクエストや追加機器も大歓迎！
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="feature-card-modern"
                variants={fadeInUp}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="feature-image-wrapper">
                  <img src={dartsImage} alt="ダーツ" className="feature-image-modern" />
                  <div className="feature-overlay">
                    <span className="feature-icon">🎯</span>
                  </div>
                </div>
                <div className="feature-content-modern">
                  <h3 className="feature-title-modern">ダーツ</h3>
                  <p className="feature-description-modern">
                    現在使えます。本格ボードで白熱の対戦を。<br/>
                    ダーツ用品やゲームセットなど、增やせます！
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* 民宿神宮寺のこだわりセクション */}
        <section className="philosophy-section" style={{ backgroundImage: `url(${nightImage})` }}>
          <div className="philosophy-overlay"></div>
          <motion.div 
            className="philosophy-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="philosophy-title">民宿神宮寺のこだわり</h2>
            <div className="philosophy-text">
              <p className="philosophy-motto">
                「みんなでつくる民宿」
              </p>
              <p className="philosophy-description">
                オーナーは「みんなでつくる民宿」をモットーに、普通の宿泊施設とは異なるスタイルを目指しています。
                過度な準備やサポートをなくし、まるで自分の家のように使っていただける施設。
                それが民宿神宮寺です。
              </p>
              <p className="philosophy-description">
                なんでも揃っていますが、すべてご自身で。足りないものは買ってくる。
                その代わり、施設に寄付していただける場合は、写真の送信やオーナーの確認により、
                宿泊料金の割引や返金をさせていただくこともあります。
              </p>
              <p className="philosophy-description">
                ただし、きれいに保つことは重要です。次の方にも快適に使っていただくため、
                マナーを持ってご利用ください。みんなで大事に使い、みんなで楽しむ。
                それが、この民宿を守り続ける唯一の方法です。
              </p>
              <div className="philosophy-highlight">
                <span className="highlight-icon">✨</span>
                <p>みんなでつくる、みんなの民宿</p>
              </div>
            </div>
          </motion.div>
        </section>

            <section className="section news-section">
              <div className="section-inner">
                <h2 className="section-title">お知らせ</h2>
                <motion.div 
                  className="news-container"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="news-card">
                    <span className="news-date">2025.02.01</span>
                    <h3 className="news-title">夏の特別プランのご案内</h3>
                    <p className="news-excerpt">
                      七夕の時期に合わせた特別会席と花火を楽しむ宿泊プランをご用意いたしました。
                    </p>
                    <Link to="/news" className="news-link">詳しく見る</Link>
                  </div>
                </motion.div>
              </div>
            </section>


            <section className="room-status-section">
              <h2 className="section-title">空室情報</h2>
              <div className="calendar-wrapper">
                <div className="rental-info">
                  <div className="rental-badge">一棟貸切</div>
                  <p className="rental-description">
                    当館は一棟貸切タイプの民宿です。<br/>
                    グループやご家族で、プライベートな時間をお過ごしいただけます。
                  </p>
                  <p className="booking-period">今週から30日先までご予約可能です</p>
                </div>
                
                <div className="calendar-header">
                  {['日', '月', '火', '水', '木', '金', '土'].map((day, index) => (
                    <div key={day} className={`calendar-header-day ${index === 0 ? 'sunday' : index === 6 ? 'saturday' : ''}`}>
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="calendar-grid-weeks">
                  {calendarDays.map((day, index) => (
                    <motion.div
                      key={index}
                      className={`calendar-day ${day.isAvailable ? 'available' : 'unavailable'} ${day.isPast ? 'past' : ''}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: Math.floor(index / 7) * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={day.isAvailable && !day.isPast ? { scale: 1.05 } : {}}
                    >
                      <span className="date">{day.month}/{day.date}</span>
                      <span className="status">{day.isAvailable ? '○' : '×'}</span>
                      {day.isAvailable && !day.isPast && <span className="price">¥15,000〜</span>}
                    </motion.div>
                  ))}
                </div>
                
                <div className="status-legend">
                  <span className="legend-item"><span className="circle available"></span>空室あり</span>
                  <span className="legend-item"><span className="circle unavailable"></span>満室</span>
                </div>
              </div>
            </section>

            <section className="features-section">
              <h2 className="section-title">館内のご案内</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon parking"></div>
                  <h3>無料駐車場</h3>
                  <p>普通車約4台まで駐車可能</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon wifi"></div>
                  <h3>Wi-Fi完備</h3>
                  <p>全館利用可能</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon bath"></div>
                  <h3>送迎サービス</h3>
                  <p>5名様までであれば<br/>送迎車を出せる場合あり</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon meal"></div>
                  <h3>スタッフ対応</h3>
                  <p>初日のご説明のみ<br/>お気軽にお過ごしください</p>
                </div>
              </div>
            </section>

            <section className="reviews-section">
              <h2 className="section-title">お客様の声</h2>
              <div className="reviews-slider">
                <div className="review-card">
                  <div className="review-header">
                    <div className="reviewer-info">
                      <span className="reviewer-name">K.S様</span>
                      <span className="stay-date">2025年7月宿泊</span>
                    </div>
                    <div className="rating">★★★★★</div>
                  </div>
                  <p className="review-text">
                    施設が充実していて、特にカラオケとバーベキューを楽しむことができました。
                    スタッフの方の対応も丁寧で、また利用したいと思います。
                  </p>
                </div>
                {/* 他のレビューカードも同様 */}
              </div>
            </section>

            <section className="access-section">
              <h2 className="section-title">アクセス</h2>
              <div className="access-content">
                <div className="access-info">
                  <h3>交通手段</h3>
                  <ul className="access-list">
                    <li>〇〇駅から車で15分</li>
                    <li>〇〇ICから車で20分</li>
                    <li>無料送迎バスあり（要予約）</li>
                  </ul>
                  <div className="address-box">
                    <h3>所在地</h3>
                    <p>〒000-0000<br/>千葉県〇〇市〇〇町1-1-1</p>
                    <button className="map-btn">GoogleMapで見る</button>
                  </div>
                </div>
                <div className="map-container">
                  {/* Google Mapを埋め込み予定 */}
                </div>
              </div>
            </section>

            <section className="tourism-section">
              <h2 className="section-title">周辺観光</h2>
              <div className="tourism-grid">
                <div className="tourism-card">
                  <img src={tourism1} alt="観光地1" />
                  <div className="tourism-content">
                    <h3>九十九里浜</h3>
                    <p>美しい海岸線で、海水浴やサーフィンに最適なスポットです。</p>
                    <span className="distance">車で10分</span>
                  </div>
                </div>
                {/* 他の観光スポットも同様 */}
              </div>
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
    </div>
  );
};

export default Home;
