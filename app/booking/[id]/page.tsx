import NavBar from '@/components/NavBar';
import SeatBookingApp from '@/components/booking/SeatBookingApp';
import React from 'react'

const Page = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  return (
    <>
      <NavBar />


      <SeatBookingApp showId={params.id}/>
    </>
  );  
};

export default Page;
