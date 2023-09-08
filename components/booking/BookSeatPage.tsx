// pages/book-seat.tsx
import React from 'react';
import SeatBookingApp from './SeatBookingApp';

const BookSeatPage: React.FC = () => {
  const showId = 'YOUR_SHOW_ID'; 

  return (
    <div>
      <div className="m-4">
        <SeatBookingApp showId={showId} />
      </div>
    </div>
  );
};

export default BookSeatPage;
