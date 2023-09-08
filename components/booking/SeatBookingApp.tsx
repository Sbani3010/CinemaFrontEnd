import React, { useState, useEffect } from 'react';
import sendBookingConfirmationEmail from './emailSender';


import { generateStaticMovie, generateStaticGenres, getTrailer } from '@/components/movie/PageHead'; 

// movie data
interface MovieData {
  title: string;
  genres: string[];
  trailer: string | null;
}

interface Seat {
  id: string;
  row: string;
  col: number;
  booked: boolean;
}

interface SeatBookingAppProps {
  showId: string;
}

const SeatBookingApp: React.FC<SeatBookingAppProps> = ({ showId }) => {
  // defining the state for movie data
  const [movieData, setMovieData] = useState<MovieData | null>(null);

  // Initialized the seats data here (similar to your previous code)
  const initialSeats: Seat[][] = [];

  for (let row = 'A'; row <= 'Z'; row = String.fromCharCode(row.charCodeAt(0) + 1)) {
    const rowSeats: Seat[] = [];
    
    for (let col = 1; col <= 26; col++) {
      const seatId = `${row}${col}`;
      const seat: Seat = {
        id: seatId,
        row: row,
        col: col,
        booked: false,
      };
      
      rowSeats.push(seat);
    }
    
    initialSeats.push(rowSeats);
  }

  const [seats, setSeats] = useState<Seat[][]>(initialSeats);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const seatPrice = 10;
  const bookingPrice = selectedSeats.length * seatPrice;

  const toggleSeat = (id: string) => {
    if (selectedSeats.includes(id)) {
      setSelectedSeats(selectedSeats.filter((seatId) => seatId !== id));
    } else {
      setSelectedSeats([...selectedSeats, id]);
    }
  };

  const handleBook = () => {
    // Send a POST request to create the booking with selectedSeats and showId
    fetch('/api/bookSeats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ showId, seats: selectedSeats }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response (e.g., show a success message)
        console.log('Booking successful:', data);
        // const movieName = Response.data.movieName;
        // const totalAmount = Response.data.totalAmount;
    
        // Update the seat state to mark them as booked
        const updatedSeats = seats.map((row) =>
          row.map((seat) =>
            selectedSeats.includes(seat.id) ? { ...seat, booked: true } : seat
          )
        );
        setSeats(updatedSeats);
    //     setSelectedSeats([]);
    //     // Send the booking confirmation email
    // // Send the booking confirmation email
    // sendBookingConfirmationEmail(
    //   'user_email@example.com', // Replace with the user's email
    //   movieName, // Use movieName directly from response.data
    //   selectedSeats, // Pass the selected seats
    //   totalAmount // Use totalAmount directly from response.data
    
  })

      
      .catch((error) => console.error('Error booking:', error));
  };

  const fetchMovieData = async (movieId: string) => {
    try {
      // Fetch movie data using the generateStaticMovie function
      const movie = await generateStaticMovie(movieId);

      // Fetch genres using the generateStaticGenres function (if needed)
      const genres = await generateStaticGenres(movieId);

      // Fetch trailer using the getTrailer function (if needed)
      const trailer = await getTrailer(movieId);

      // Set the movie data in the state
      setMovieData({
        title: movie.title,
        genres: genres || [],
        trailer: trailer || null,
      });
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  useEffect(() => {
    // Fetch movie data when the component mounts
    fetchMovieData(showId);
  }, [showId]);

  return (
    <div>
      {/* Display movie-related information */}
      {movieData && (
        <div>
          <h1>{movieData.title}</h1>
          <p>Genres: {movieData.genres.join(', ')}</p>
          {movieData.trailer && <iframe width="560" height="315" src={movieData.trailer}></iframe>}
        </div>
      )}

      <div className="flex flex-wrap p-4">
        {seats.map((row) => (
          <div key={row[0].row} className="flex">
            {row.map((seat) => (
              <div
                key={seat.id}
                className={`w-8 h-8 m-1 rounded-lg cursor-pointer ${
                  seat.booked ? 'bg-blue-500' : 'bg-gray-200'
                } ${selectedSeats.includes(seat.id) ? 'border-2 border-yellow-400' : ''}`}
                onClick={() => toggleSeat(seat.id)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          onClick={handleBook}
          className={`bg-gold text-white px-4 py-2 rounded-lg mx-2 ${
            selectedSeats.length === 0 ? 'cursor-not-allowed opacity-50' : ''
          }`}
          disabled={selectedSeats.length === 0}
        >
          Book ({bookingPrice}R)
        </button>
      </div>
    </div>
  );
};

export default SeatBookingApp;
//Just tell me which code is unneceesary and what can i change also when i try runing it fails to fetch//