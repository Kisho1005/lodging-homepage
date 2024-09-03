import React from 'react';
import './Facilities.css';

// src/assets/onsen.jpg
import BBQImage from '../../assets/facilities_image/BBQ.jpg';

// src/assets/washitsu.jpg
import dartsImage from '../../assets/facilities_image/darts.jpg';
// src/assets/restaurant.jpg
import songImage from '../../assets/facilities_image/song.jpg';

const equipmentData = [
  {
    id: 1,
    name: "BBQ",
    description: "BBQグリルを完備!、使い方も簡単!",
    image: BBQImage,
  },
  {
    id: 2,
    name: "darts",
    description: "みんな大好きダーツ台を設置！、無料で様々げーkをプレイできます！",
    image: dartsImage,
  },
  {
    id: 3,
    name: "カラオケ",
    description: "防音対策ばっちりな部屋で、心行くまでお楽しみ下さい！",
    image: songImage,
  },
  // さらに設備を追加できます
];

const Facilities = () => {
  return (
    <div className="equipment-container">
      <h1 className="equipment-title">設備のご案内</h1>
      <div className="equipment-list">
        {equipmentData.map(equipment => (
          <div key={equipment.id} className="equipment-item">
            <img src={equipment.image} alt={equipment.name} className="equipment-image" />
            <h2 className="equipment-name">{equipment.name}</h2>
            <p className="equipment-description">{equipment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;


