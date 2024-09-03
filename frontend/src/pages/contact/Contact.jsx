import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  console.log(name);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-container">
      <div className="contact-form-container">
        <h2 className="contact-title">お問い合わせ</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="username">
              名前
            </label>
            <input
              className="form-input"
              id="username"
              type="text"
              placeholder="名前"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="cellphonenumber">
              電話番号
            </label>
            <input
              className="form-input"
              id="cellphonenumber"
              type="tel"
              placeholder="電話番号"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              メールアドレス
            </label>
            <input
              className="form-input"
              id="email"
              type="email"
              placeholder="メールアドレス"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">
              お問い合わせ内容
            </label>
            <textarea
              className="form-textarea"
              id="message"
              placeholder="お問い合わせ内容"
              required
              value={message}
              rows={5}
              cols={50}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="form-button-container">
            <button className="form-button" type="submit">
              送信
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
