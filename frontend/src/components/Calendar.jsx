import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calendar.css';

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    guest_name: '',
    contact: '',
  });

  // —\–ñî•ñ‚Ìæ“¾
  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/reservations');
      const data = await response.json();
      const formattedEvents = data.map(reservation => ({
        title: '—\–ñÏ',
        start: reservation.check_in,
        end: reservation.check_out,
        backgroundColor: '#FF5252',
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  // —\–ñ‚Ìì¬
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate) return;

    try {
      const response = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          check_in: selectedDate,
          check_out: selectedDate, // 1“ú1‘g‚È‚Ì‚Å“¯‚¶“ú•t
          ...formData,
        }),
      });

      if (response.ok) {
        alert('—\–ñ‚ªŠ®—¹‚µ‚Ü‚µ‚½');
        fetchReservations();
        setSelectedDate(null);
        setFormData({ guest_name: '', contact: '' });
      } else {
        const error = await response.json();
        alert(error.error || '—\–ñ‚É¸”s‚µ‚Ü‚µ‚½');
      }
    } catch (error) {
      console.error('Error creating reservation:', error);
      alert('—\–ñ‚É¸”s‚µ‚Ü‚µ‚½');
    }
  };

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
  };

  return (
    <div className="calendar-container">
      <h2>‹óºƒJƒŒƒ“ƒ_[</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        locale="ja"
        buttonText={{
          today: '¡“ú',
          month: 'Œ',
          week: 'T',
          day: '“ú',
        }}
      />

      {selectedDate && (
        <div className="reservation-form">
          <h3>{selectedDate}‚Ì—\–ñ</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>‚¨–¼‘O:</label>
              <input
                type="text"
                value={formData.guest_name}
                onChange={(e) => setFormData({...formData, guest_name: e.target.value})}
                required
              />
            </div>
            <div>
              <label>˜A—æ:</label>
              <input
                type="text"
                value={formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
                required
              />
            </div>
            <button type="submit">—\–ñ‚·‚é</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Calendar;
