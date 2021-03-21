import { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const GetTopAnime = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    );
    const data = await response.json();
    setTopAnime(data.top.slice(0, 5));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
    setSearch("");
  };

  console.log(animeList);

  const fetchAnime = async (query) => {
    const response = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    );
    const data = await response.json();
    setAnimeList(data.results);
  };

  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainContent
          handleSearch={handleSearch}
          setSearch={setSearch}
          search={search}
          animeList={animeList}
        />
      </div>
    </div>
  );
}

export default App;
