import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Row = ({ rowID, title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState('');
  const Api_Key = "7dc32f45f176caf0f3e2d7ff7c8dcb1c";

  const openModal = (movieId) => {
    console.log("movie id ", movieId);
   
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${Api_Key}`
        )
        .then((response) => {
          const trailer = response.data.results.find((video) => video.type === 'Trailer')
          if (trailer) {
            setTrailerKey(trailer.key)
          }
        })
    setModalOpen(true);
  };

  console.log('trailer key' , trailerKey);


  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  console.log(movies);

  return (
    <>
      <div className=" bg-gray-900 p-10 mt-20 md:mt-0 rounded-lg ">
        <div className="flex flex-row mt-20 md:mt-0">
          <h1 className="text-white text-2xl mt-20  md:mt-0 ">{title}</h1>
          <svg
            className="mt-20 md:mt-0 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="flex gap-7 overflow-x-auto overflow-auto no-scrollbar">
          {movies.map((movie, index) => (
            <div className="flex-shrink-0 relative w-60 h-44" key={index}>
              <img
                className="w-full h-full object-cover hover:transform hover:scale-110 transform transition-transform duration-300"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={`Movie image: ${movie.title}`}
                title={movie.title}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h5 className="text-white text-lg font-bold">{movie.title}</h5>
                <button
                  className="text-white text-4xl"
                  onClick={(e) => openModal(movie.id)}
                >
                  {" "}
                   <AiOutlinePlayCircle /> {" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={closeModal} className="close-button">
              Close
            </button>
            <iframe
              width="950"
              height="404"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="Sintel - Open Movie by Blender Foundation"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Row;
