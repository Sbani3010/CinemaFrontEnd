"use client";
import React, { useState } from "react";

const Seat = ({ seat, setBooking, booking }: any) => {
  const [selected, isSelected] = useState(false);
  console.log(seat.reserved);
  return (
    <div className="h-10 w-10 bg-slate-700">
      <button
        disabled={seat.reserved}
        onClick={() => {
          isSelected(!selected);
          !selected
            ? setBooking([...booking, seat])
            : setBooking(
                booking.filter(
                  (v: { seatNum: any }) => v.seatNum !== seat.seatNum
                )
              );
        }}
        className={`h-10 w-10 ${selected && "bg-orange-600"} ${
          seat.reserved && "bg-purple-500"
        }`}
      >
        {seat.seatNum}
      </button>
    </div>
  );
};

export default Seat;
