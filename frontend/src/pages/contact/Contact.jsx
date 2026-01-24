import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import "./Contact.css";
import logoImage from '../../assets/facilities_image/rogo.jpg';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const dateParam = searchParams.get('date');
  
  const [scrollY, setScrollY] = useState(0);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState(dateParam || "");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 通知機能は後で実装
    setTimeout(() => {
      alert('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。');
      // フォームをリセット
      setName('');
      setPhoneNumber('');
      setEmail('');
      setCheckInDate('');
      setCheckOutDate('');
      setGuests(2);
      setMessage('');
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="contact-page">
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

      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="page-title">ご予約・お問い合わせ</h1>
          <p className="page-subtitle">お気軽にお問い合わせください</p>
        </motion.div>
      </section>

      <section className="contact-content">
        <div className="contact-wrapper">
          <motion.div 
            className="contact-info-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="info-title">お問い合わせ先</h2>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h3>お電話でのご予約</h3>
                <p className="info-value">0120-XXX-XXXX</p>
                <p className="info-note">受付時間：9:00-20:00</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <h3>メールでのお問い合わせ</h3>
                <p className="info-value">info@kakurega.jp</p>
                <p className="info-note">24時間受付（返信は翌営業日）</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h3>所在地</h3>
                <p className="info-value">〒000-0000<br/>千葉県〇〇市〇〇町1-1-1</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="modern-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="username">
                    お名前 <span className="required">*</span>
                  </label>
                  <input
                    className="form-input"
                    id="username"
                    type="text"
                    placeholder="山田 太郎"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cellphonenumber">
                    電話番号 <span className="required">*</span>
                  </label>
                  <input
                    className="form-input"
                    id="cellphonenumber"
                    type="tel"
                    placeholder="090-1234-5678"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  メールアドレス <span className="required">*</span>
                </label>
                <input
                  className="form-input"
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="checkin">
                    チェックイン日 <span className="required">*</span>
                  </label>
                  <input
                    className="form-input"
                    id="checkin"
                    type="date"
                    required
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="checkout">
                    チェックアウト日 <span className="required">*</span>
                  </label>
                  <input
                    className="form-input"
                    id="checkout"
                    type="date"
                    required
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    min={checkInDate || new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="guests">
                  宿泊人数 <span className="required">*</span>
                </label>
                <select
                  className="form-input"
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num}名</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  お問い合わせ内容
                </label>
                <textarea
                  className="form-textarea"
                  id="message"
                  placeholder="ご要望やご質問をご記入ください"
                  value={message}
                  rows={5}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button 
                className="submit-button" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? '送信中...' : '予約を申し込む'}
              </button>

              <p className="form-note">
                ※送信後、担当者より折り返しご連絡いたします。<br/>
                ※お急ぎの場合はお電話にてお問い合わせください。
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
