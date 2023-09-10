"use client";

import React, { FormEvent, useState } from "react";
import Seat from "./Seat";
import MovieCard from "../MovieCard";
import { SeatT } from "@/utils/SeatType";
import { useRouter } from "next/navigation";
import ConfirmationModal from "./ConfirmationModal";
// import { generateStaticShow } from "@/app/booking/[id]/page";

const BookingHeader = ({ movieShow }: any) => {
  const [seats, setBooking] = useState<SeatT[]>([]);
  const path = useRouter();
  const [updateData, setData] = useState<SeatT[]>([]);
  const date = new Date();
  delete movieShow.room;
  console.log(seats);

  const updateSeat = async (seatId: number) => {
    const resData: SeatT = await fetch("http://localhost:8084/seat/" + seatId)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    console.log(resData);
    if (resData.seatId === seatId) {
      const y = {
        seatId: resData.seatId,
        seatNum: resData.seatNum,
        price: resData.price,
        //Needs Fixing
        reserved: !resData.reserved,
      };
      console.log(y);
      const x = await fetch("http://localhost:8084/seat/update", {
        method: "POST",
        body: JSON.stringify(y),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));
      console.log(x);
    }
    if (resData.seatId === seatId) {
      setData([...updateData, resData]);
    }
    return resData;
  };
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const x: object = {
      dateMade: date,
      movieShow: {
        showId: movieShow.showId,
        movieRoom: movieShow.movieRoom,
        movie: movieShow.movie,
        dateCreated: movieShow.dateCreated,
        startTime: movieShow.startTime,
      },
      seats,
    };

    const req = await fetch("http://localhost:8084/booking/create", {
      method: "post",
      body: JSON.stringify(x),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((v) => v.json())
      .catch((err) => console.log(err));

    if (req == null) {
    } else {
      seats.map(async (myseat) => {
        await updateSeat(myseat.seatId);
      });

      alert("Successfully Booked");
      path.push("/");
    }
  }
  const [show, setShow] = useState(false);
  return (
    <div className="flex justify-around gap-2 pt-6">
      {show && (
        <ConfirmationModal setShow={setShow} handleSubmit={handleSubmit} />
      )}
      {/* <button className="bg-blue-500" onClick={async () => await updateSeat(2)}>
        CCheck
      </button> */}
      <div className="grid grid-cols-10 gap-1 p-4">
        {movieShow.movieRoom.seats.map((seat: any) => (
          <Seat seat={seat} setBooking={setBooking} booking={seats} />
        ))}
      </div>
      <div className="details-container p-3">
        <MovieCard movie={movieShow.movie} />
        <h1>Number of seats: {seats.length}</h1>
        <h1>Price per seat: R{movieShow.movieRoom.seats[0].price}</h1>
        <h1>Total:R{movieShow.movieRoom.seats[0].price * seats.length}</h1>
        <button
          disabled={seats.length == 0}
          onClick={() => setShow(true)}
          className={`h-8 w-full  p-1 ${
            seats.length === 0 ? "bg-purple-500" : "bg-orange-600"
          }`}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingHeader;
