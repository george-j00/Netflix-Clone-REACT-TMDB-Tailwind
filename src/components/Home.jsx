import React from "react";
import requests from '../constants/constants'
import Head from "./Head";
import Row from "./Row";

const Home = () => {
  return (
    <>
      <Head />
      <Row rowID="2" title="Popular" fetchURL={requests.requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requests.requestTopRated} />
      <Row rowID="5" title="Horror" fetchURL={requests.requests.requestHorror} />
    </>
  );
};

export default Home;
