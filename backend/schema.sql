CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    guest_name TEXT NOT NULL,
    contact TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
