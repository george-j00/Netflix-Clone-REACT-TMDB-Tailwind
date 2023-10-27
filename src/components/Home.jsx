import React from "react";
import movietitleImage from "../assets/image 4.png";
import peaky from "../assets/peaky-blinders.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // const apiKey = process.env.REACT_APP_TMDB_API_KEY ;
    const apiKey = "7dc32f45f176caf0f3e2d7ff7c8dcb1c";
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data.results);
        // console.log(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(movies);

  const moviesWithVideos = [
    {
      title: "Big Buck Bunny",
      description:
        "Three rodents amuse themselves by harassing creatures of the forest. However, when they mess with a bunny, he decides to teach them a lesson.",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnailUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png",
      genre: "Comedy",
      duration: "10 minutes",
    },
    {
      title: "Sintel",
      description:
        "A lonely young woman, Sintel, helps and befriends a dragon, whom she calls Scales. But when he is kidnapped by an adult dragon, Sintel decides to embark on a dangerous quest to find her lost friend Scales.",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      thumbnailUrl: "http://uhdtv.io/wp-content/uploads/2020/10/Sintel-3.jpg",
      genre: "Adventure",
      duration: "15 minutes",
    },
    {
      title: "Tears of Steel",
      description:
        "In an apocalyptic future, a group of soldiers and scientists takes refuge in Amsterdam to try to stop an army of robots that threatens the planet.",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      thumbnailUrl:
        "https://mango.blender.org/wp-content/uploads/2013/05/01_thom_celia_bridge.jpg",
      genre: "Action",
      duration: "12 minutes",
    },
    {
      title: "Elephant's Dream",
      description:
        "Friends Proog and Emo journey inside the folds of a seemingly infinite Machine, exploring the dark and twisted complex of wires, gears, and cogs, until a moment of conflict negates all their assumptions.",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnailUrl: "https://download.blender.org/ED/cover.jpg",
      genre: "Sci-Fi",
      duration: "15 minutes",
    },
  ];

  const movie = {
    title: "Expend4bles",
    backdrop_path: "/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
    tagline: "#1 in TV Shows Today",
    overview:
      "When a father and daughter discover they both secretly work for the CIA, an already dicey undercover mission turns into a dysfunctional family affair.",
    playButtonLabel: "Play",
    moreInfoButtonLabel: "More info",
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="bg-gray-900">
          <div className="relative h-100vw">
            <video
              className="overflow-hidden overflow-y-hidden"
              autoPlay
              muted
              loop
              poster={moviesWithVideos[1]?.thumbnailUrl}
              src={moviesWithVideos[1]?.videoUrl}
            ></video>

            <div className="container absolute top-5 right-0 flex items-center w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="111"
                height="30"
                viewBox="0 0 111 30"
                fill="none"
              >
                <path
                  d="M105.062 14.2806L110.999 30C109.249 29.7497 107.5 29.4367 105.718 29.1555L102.374 20.4686L98.9371 28.4375C97.25 28.1563 95.5928 28.0617 93.9057 27.8433L99.9372 14.0932L94.4681 0H99.5313L102.593 7.87422L105.875 0H110.999L105.062 14.2806ZM90.4687 0H85.875V27.25C87.3746 27.3437 88.9371 27.4056 90.4687 27.593V0ZM81.9055 26.9369C77.7186 26.6557 73.5308 26.4064 69.2502 26.3117V0H73.9366V21.8746C76.6248 21.9374 79.312 22.1558 81.9055 22.2804V26.9369ZM64.2497 10.6561V15.3435H57.8442V25.9996H53.2187V0H66.3436V4.68741H57.8442V10.6561H64.2497ZM45.3435 4.68741V26.2499C43.781 26.2499 42.1876 26.2499 40.6561 26.3117V4.68741H35.8122V0H50.2184V4.68741H45.3435ZM30.7498 15.5928C28.6878 15.5928 26.2499 15.5928 24.5 15.6875V22.6563C27.25 22.4679 30 22.2495 32.781 22.1558V26.6557L19.8125 27.6877V0H32.781V4.68741H24.5V10.9992C26.3127 10.9992 29.0936 10.9054 30.7498 10.9054V15.5928ZM4.78114 12.9684V29.343C3.09401 29.5314 1.5934 29.7497 0 30V0H4.46902L10.5624 17.0316V0H15.2498V28.0617C13.5936 28.3438 11.9065 28.4375 10.1247 28.6868L4.78114 12.9684Z"
                  fill="#EE1520"
                />
              </svg>
              <ul className="flex ml-5 gap-5 text-gray-300">
                <li>Start</li>
                <li>Shows</li>
                <li>Movies</li>
                <li>New</li>
              </ul>
              <ul className="absolute top-4 right-4 flex flex-row space-x-4">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.9999 20.9999L16.6499 16.6499"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
               
                <li>
                  <button
                    className="bg-red-600 text-white px-5 py-1  rounded-md"
                    onClick={logout}
                  >
                    logout
                  </button>
                </li>
              </ul>
            </div>

            {/* gradient upwardd */}
            <div className="absolute w-full h-12 bg-gradient-to-t from-gray-900 to-transparent bottom-0 z-20" />

            <div className="flex flex-col absolute top-20 left-0 text-white justify-center ml-10">
              <h1 className="text-7xl mt-20 font-semibold">
                {moviesWithVideos[1]?.title}
              </h1>
              <img
                // src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                src={moviesWithVideos[1]?.thumbnailUrl}
                alt="Movie Cover"
                className="w-2/5 mt-10 hidden"
              />

              <div className="flex flex-col mt-5 ">
                <div className="flex flex-row gap-4">
                  {/* top 10 svg  */}
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="36"
                      viewBox="0 0 34 36"
                      fill="none"
                    >
                      <path
                        d="M30.3571 0H3.64286C1.63096 0 0 1.567 0 3.5V31.5C0 33.433 1.63096 35 3.64286 35H30.3571C32.369 35 34 33.433 34 31.5V3.5C34 1.567 32.369 0 30.3571 0Z"
                        fill="#E50914"
                      />
                      <path
                        d="M20.4257 26.6029C21.1447 26.6029 21.7087 26.2629 22.1176 25.5837C22.5266 24.9037 22.7314 23.9487 22.7314 22.7171C22.7314 21.4855 22.5266 20.5297 22.1176 19.8498C21.7087 19.1706 21.1447 18.8306 20.4257 18.8306C19.7066 18.8306 19.1426 19.1706 18.733 19.8498C18.3241 20.5297 18.12 21.4855 18.12 22.7171C18.12 23.9487 18.3241 24.9037 18.733 25.5837C19.1426 26.2629 19.7066 26.6029 20.4257 26.6029ZM20.4257 28.885C19.4131 28.885 18.5275 28.6327 17.768 28.1288C17.0093 27.6249 16.423 26.9115 16.0111 25.9878C15.5993 25.0641 15.3931 23.9743 15.3931 22.7171C15.3931 21.4705 15.5993 20.3829 16.0111 19.4542C16.423 18.5255 17.0093 17.8092 17.768 17.3046C18.5275 16.8007 19.4131 16.5484 20.4257 16.5484C21.4375 16.5484 22.3239 16.8007 23.0834 17.3046C23.8428 17.8092 24.4277 18.5255 24.8402 19.4542C25.2513 20.3829 25.4583 21.4705 25.4583 22.7171C25.4583 23.9743 25.2513 25.0641 24.8402 25.9878C24.4277 26.9115 23.8428 27.6249 23.0834 28.1288C22.3239 28.6327 21.4375 28.885 20.4257 28.885Z"
                        fill="white"
                      />
                      <path
                        d="M10.7668 28.6913V19.9982L8.35577 20.614V17.912L13.4483 16.627V28.6913H10.7668Z"
                        fill="white"
                      />
                      <path
                        d="M24.3329 11.3071H25.2676C25.7291 11.3071 26.0638 11.218 26.2715 11.0391C26.4792 10.8609 26.583 10.6079 26.583 10.2808C26.583 9.96148 26.4792 9.71487 26.2715 9.53954C26.0638 9.36492 25.7291 9.27726 25.2676 9.27726H24.3329V11.3071ZM22.1404 15.401V7.46408H25.6137C26.2679 7.46408 26.8326 7.58168 27.31 7.81759C27.7867 8.05351 28.156 8.38421 28.4178 8.80971C28.6789 9.23592 28.8102 9.72628 28.8102 10.2808C28.8102 10.851 28.6789 11.3492 28.4178 11.7747C28.156 12.2002 27.7867 12.5316 27.31 12.7668C26.8326 13.0027 26.2679 13.1203 25.6137 13.1203H24.3329V15.401H22.1404Z"
                        fill="white"
                      />
                      <path
                        d="M17.0858 13.6791C17.4782 13.6791 17.8222 13.5865 18.1186 13.3997C18.415 13.2137 18.6458 12.9514 18.811 12.6129C18.9769 12.2743 19.0591 11.8816 19.0591 11.4326C19.0591 10.9843 18.9769 10.5909 18.811 10.2523C18.6458 9.91379 18.415 9.65222 18.1186 9.46549C17.8222 9.27946 17.4782 9.1861 17.0858 9.1861C16.6935 9.1861 16.3495 9.27946 16.0531 9.46549C15.7566 9.65222 15.5259 9.91379 15.3607 10.2523C15.1955 10.5909 15.1126 10.9843 15.1126 11.4326C15.1126 11.8816 15.1955 12.2743 15.3607 12.6129C15.5259 12.9514 15.7566 13.2137 16.0531 13.3997C16.3495 13.5865 16.6935 13.6791 17.0858 13.6791ZM17.0858 15.5949C16.4699 15.5949 15.9067 15.4909 15.3953 15.2813C14.884 15.0725 14.4397 14.7796 14.0625 14.4033C13.686 14.0269 13.3954 13.5865 13.1913 13.0804C12.9872 12.5751 12.8855 12.0256 12.8855 11.4326C12.8855 10.8396 12.9872 10.2908 13.1913 9.78479C13.3954 9.27946 13.686 8.83829 14.0625 8.46197C14.4397 8.08565 14.884 7.79343 15.3953 7.58389C15.9067 7.37506 16.4699 7.27029 17.0858 7.27029C17.7018 7.27029 18.265 7.37506 18.7764 7.58389C19.2877 7.79343 19.732 8.08565 20.1092 8.46197C20.4864 8.83829 20.7763 9.27946 20.9804 9.78479C21.1845 10.2908 21.2862 10.8396 21.2862 11.4326C21.2862 12.0256 21.1845 12.5751 20.9804 13.0804C20.7763 13.5865 20.4864 14.0269 20.1092 14.4033C19.732 14.7796 19.2877 15.0725 18.7764 15.2813C18.265 15.4909 17.7018 15.5949 17.0858 15.5949Z"
                        fill="white"
                      />
                      <path
                        d="M10.2776 15.4011L8.08514 15.9199V9.33435H5.65033V7.46415H12.7124V9.33435H10.2776V15.4011Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <div>{movie.tagline}</div>
                </div>
                <p className=" w-full md:w-1/2">
                  {moviesWithVideos[1]?.description}
                </p>
                <div className="flex flex-row gap-3">
                  <button className="bg-white text-black px-5 py-1 mt-3 rounded-md">
                    {movie.playButtonLabel}
                  </button>
                  <button className="bg-gray-600 text-white px-5 py-1 mt-3 rounded-md">
                    {movie.moreInfoButtonLabel}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-gray-900 p-10 mt-20 md:mt-0 rounded-lg ">
            <div className="flex flex-row mt-20 md:mt-0">
              <h1 className="text-white text-2xl mt-20  md:mt-0 ">
                See again{" "}
              </h1>
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

            <div className="flex flex-row gap-7 overflow-x-auto overflow-auto no-scrollbar">
              {movies.slice(0, 8).map((item , index ) => (
                <img
                key={index}
                  className="w-60 h-44 "
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  alt=""
                />
              ))}
            </div>
          </div>

          <div className=" bg-gray-900 p-10 rounded-lg ">
            <div className="flex flex-row">
              <h1 className="text-white text-2xl mb-4">Trending now </h1>
              <svg
                className="mt-1 ml-1"
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
            <div className="flex flex-row gap-7 overflow-x-auto overflow-auto no-scrollbar">
              {movies.slice(8, 15).map((item , index) => (
                <img
                key={index}
                  className="w-60 h-44 "
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className=" bg-gray-900 p-10 rounded-lg ">
            <div className="flex flex-row">
              <h1 className="text-white text-2xl mb-4">Sci-fi shows </h1>
              <svg
                className="mt-1 ml-1"
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
            <div className="flex flex-row gap-7 overflow-x-auto overflow-auto no-scrollbar">
              {movies.slice(15, 20).map((item , index) => (
                <img
                key={index}
                  className="w-60 h-44 "
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        navigate("/signin")
      )}
    </>
  );
};

export default Home;
