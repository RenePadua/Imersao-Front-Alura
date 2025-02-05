import React, { useState, useEffect } from "react";
import "./Main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import card1 from "../../assets/playlist/1.jpeg";
import card2 from "../../assets/playlist/2.png";
import card3 from "../../assets/playlist/3.jpeg";
import card4 from "../../assets/playlist/4.jpeg";
import card5 from "../../assets/playlist/5.jpeg";
import card6 from "../../assets/playlist/6.jpeg";
import card7 from "../../assets/playlist/7.jpeg";
import card8 from "../../assets/playlist/8.jpeg";
import card9 from "../../assets/playlist/9.jpeg";
import card10 from "../../assets/playlist/10.jpeg";
import card11 from "../../assets/playlist/11.jpeg";
import card12 from "../../assets/playlist/12.jpeg";
import card13 from "../../assets/playlist/13.jpeg";
import card14 from "../../assets/playlist/14.jpeg";
import card15 from "../../assets/playlist/15.jpeg";

const Main = ({ searchTerm }) => {
  const [artists, setArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);



  const playlists = [
    { img: card1, name: "Boas festas" },
    { img: card2, name: "Feitos para você" },
    { img: card3, name: "Lançamentos" },
    { img: card4, name: "Creators" },
    { img: card5, name: "Para treinar" },
    { img: card6, name: "Podcasts" },
    { img: card7, name: "Sertanejo" },
    { img: card8, name: "Samba e pagode" },
    { img: card9, name: "Funk" },
    { img: card10, name: "MPB" },
    { img: card11, name: "Rock" },
    { img: card12, name: "Hip Hop" },
    { img: card13, name: "Indie" },
    { img: card14, name: "Relax" },
    { img: card15, name: "Música Latina" },
  ];

  useEffect(() => {
    fetch("/api-artists/artists.json")
      .then((response) => {
        console.log("Resposta da API:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Dados carregados:", data);
        setArtists(data.artists);
      })
      .catch((error) => console.error("Erro ao carregar artistas:", error));
  }, []); 

  
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredArtists([]); 
    } else {
      const filtered = artists.filter((artist) =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredArtists(filtered);
    }
  }, [searchTerm, artists]); 

  return (
    <div className="playlist-container">
      <div className="playlist">
        <h1 id="greeting">Boas Vindas</h1>
        <h2 className="session">Navegar por todas as seções</h2>
      </div>




      {filteredArtists.length === 0 ? (
        <div className="offer__scroll-container">
          <div className="offer__list">
            <section className="offer__list-item">
              {playlists.map((playlist, index) => (
                <a href="#" key={index} className="cards">
                  <div className={`cards card${index + 1}`}>
                    <img src={playlist.img} alt={playlist.name} />
                    <span>{playlist.name}</span>
                  </div>
                </a>
              ))}
            </section>
          </div>
        </div>
      ) : (
        <div id="result-artist">
          <div className="grid-container">
            {filteredArtists.length > 0 ? (
              filteredArtists.map((artist) => (
                <div key={artist.id} className="artist-card">
                  <div className="card-img">
                    <img src={artist.urlImg} alt={artist.name} className="artist-img" />
                    <div className="play">
                      <span><FontAwesomeIcon icon={faPlay} /></span>
                    </div>
                  </div>
                  <div className="card-text">
                    <span className="artist-name">{artist.name}</span>
                    <span className="artist-categorie">{artist.genre}</span>
                  </div>
                </div>
              ))
            ) : (
              <p>Nenhum artista encontrado.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
