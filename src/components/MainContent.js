import React from "react";
import AnimeCard from "./AnimeCard";

function MainContent({ handleSearch, search, setSearch, animeList }) {
  return (
    <main>
      <div className="main-head">
        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search for an anime ..."
            required
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
      </div>
      <div className="anime-list">
        {animeList.map((anime) => (
          <div className="anime-card" key={anime.mal_id}>
            <AnimeCard anime={anime} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainContent;
