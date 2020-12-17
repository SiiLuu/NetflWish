// Packages.
import React from "react";

// Components.
import Row from "./components/Row";
import requests from "./axios/requests";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div style={{ backgroundColor: "#141414" }}>
      <Navbar />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Actions Movie" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default App;
