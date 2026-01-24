import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Facilities.css';

import BBQImage from '../../assets/facilities_image/BBQ.jpg';
import dartsImage from '../../assets/facilities_image/darts.jpg';
import songImage from '../../assets/facilities_image/song.jpg';
import logoImage from '../../assets/facilities_image/rogp.png';

const equipmentData = [
  {
    id: 1,
    name: "バーベキュー設備",
    description: "海を眺めながら本格的なバーベキューをお楽しみください。最新のBBQグリルを完備しており、使い方も簡単です。",
    details: "利用時間：10:00-22:00 | 定員：15名まで | 予約：要予約",
    image: BBQImage,
    icon: "🔥"
  },
  {
    id: 2,
    name: "ダーツ",
    description: "本格的なダーツボードで、エキサイティングな対戦を楽しめます。初心者から上級者まで、無料でご利用いただけます。",
    details: "利用時間：24時間 | 台数：2台 | 予約：不要",
    image: dartsImage,
    icon: "🎯"
  },
  {
    id: 3,
    name: "カラオケルーム",
    description: "防音対策万全のカラオケルームで、心ゆくまでお楽しみください。最新の機種を導入しています。",
    details: "利用時間：10:00-23:00 | 定員：10名まで | 予約：要予約",
    image: songImage,
    icon: "🎤"
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const Facilities = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="facilities-page">
      <motion.nav 
        className="modern-nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ 
          backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
          background: scrollY > 50 ? 'rgba(26, 26, 26, 0.8)' : 'transparent'
        }}
      >
        <Link to="/" className="logo-container">
          <img src={logoImage} alt="ロゴ" className="logo-image" />
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">ホーム</Link>
          <Link to="/facilities" className="nav-link">施設</Link>
          <Link to="/calendar" className="nav-link">空室</Link>
          <Link to="/contact" className="nav-link contact-nav">予約</Link>
        </div>
      </motion.nav>

      <section className="facilities-hero">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="page-title">施設のご案内</h1>
          <p className="page-subtitle">充実の設備で、特別な時間を</p>
        </motion.div>
      </section>

      <section className="facilities-content">
        <div className="facilities-grid">
          {equipmentData.map((equipment, index) => (
            <motion.div
              key={equipment.id}
              className="facility-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="facility-image-wrapper">
                <img src={equipment.image} alt={equipment.name} className="facility-image" />
                <div className="facility-icon-overlay">
                  <span className="facility-icon">{equipment.icon}</span>
                </div>
              </div>
              <div className="facility-info">
                <h3 className="facility-name">{equipment.name}</h3>
                <p className="facility-description">{equipment.description}</p>
                <div className="facility-details">{equipment.details}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="reservation-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="reservation-title">ご予約はこちら</h2>
          <p className="reservation-subtitle">希望日を選択して予約フォームへ進んでください</p>
          
          <div className="date-picker-container">
            <label htmlFor="visit-date" className="date-label">
              <span className="label-icon">📅</span>
              宿泊希望日
            </label>
            <input
              type="date"
              id="visit-date"
              className="date-input"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <Link 
            to={`/contact${selectedDate ? `?date=${selectedDate}` : ''}`} 
            className="reservation-button"
          >
            予約フォームへ進む
          </Link>
        </motion.div>

        <motion.div 
          className="notice-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="notice-title">ご注意事項</h3>
          <ul className="notice-list">
            <li>機械の故障等により、一時利用を中止させていただく場合がございます。</li>
            <li>施設のご利用は宿泊者様限定となります。</li>
            <li>カラオケとBBQ設備のご利用には事前予約が必要です。</li>
            <li>ダーツは予約不要で24時間ご利用いただけます。</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
};

export default Facilities;


