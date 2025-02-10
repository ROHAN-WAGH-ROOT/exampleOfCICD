import React, { useEffect, useState } from "react";
import axios from "axios";
import GameCard from "../../Components/GameCard/GameCard";
import "./Games.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Games() {
  const [games, setGames] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [sort, setSort] = useState(false);
  let query;
  const location = useLocation();
  const navigate = useNavigate();
  let params = new URLSearchParams(location.search);
  let getAllParams = params.getAll("genre");

  const getGamesData = async () => {
    query = genreList
      .map((genre) => {
        return `genre=${genre}`;
      })
      .join("&");

    if (sort) {
      if (genreList.length > 0) {
        query = query + "&_sort=price&_order=asc";
      } else {
        query = query + "?_sort=price&_order=asc";
      }
    }

    const response = await axios.get(`http://localhost:5000/games?${query}`);
    setGames(response?.data);
    location.search = query;
    navigate(location);
  };

  const handleRoute = (name) => {
    let arr = [];
    arr = genreList.filter((item) => item !== name);
    query = arr
      .map((genre) => {
        return `genre=${genre}`;
      })
      .join("&");
    location.search = query;
    navigate(location);
    setGenreList(arr);
  };

  useEffect(() => {
    getGamesData();
  }, [genreList, query, sort]);

  useEffect(() => {
    setGenreList(getAllParams);
  }, []);

  return (
    <div className="gamesContainerMain">
      <label>filter by genre</label>
      <div>
        <input
          style={{
            marginLeft: "10px",
            marginBottom: "10px",
            padding: "5px",
          }}
          type="checkbox"
          name="Sports"
          checked={getAllParams.includes("Sports")}
          onChange={(e) => {
            let arr = [];
            if (e.target.checked && !genreList.includes(e.target.name)) {
              arr.push(e.target.name);
              setGenreList((prev) => [...prev, ...arr]);
            } else {
              handleRoute(e.target.name);
            }
          }}
        />
        {"  "}
        <label>Sports</label>
      </div>
      <div>
        <input
          style={{
            marginLeft: "10px",
            marginBottom: "10px",
            padding: "5px",
          }}
          type="checkbox"
          name="Shooter"
          checked={getAllParams.includes("Shooter")}
          onChange={(e) => {
            let arr = [];
            if (e.target.checked && !genreList.includes(e.target.name)) {
              arr.push(e.target.name);
              setGenreList((prev) => [...prev, ...arr]);
            } else {
              handleRoute(e.target.name);
            }
          }}
        />
        {"  "}
        <label>Shooter</label>
      </div>
      <div>
        <input
          style={{
            marginLeft: "10px",
            marginBottom: "10px",
            padding: "5px",
          }}
          type="checkbox"
          name="RPG"
          checked={getAllParams.includes("RPG")}
          onChange={(e) => {
            let arr = [];
            if (e.target.checked && !genreList.includes(e.target.name)) {
              arr.push(e.target.name);
              setGenreList((prev) => [...prev, ...arr]);
            } else {
              handleRoute(e.target.name);
            }
          }}
        />
        {"  "}
        <label>RPG</label>
      </div>
      <div>
        <input
          style={{
            marginLeft: "10px",
            marginBottom: "10px",
            padding: "5px",
          }}
          type="checkbox"
          name="Adventure"
          checked={getAllParams.includes("Adventure")}
          onChange={(e) => {
            let arr = [];
            if (e.target.checked && !genreList.includes(e.target.name)) {
              arr.push(e.target.name);
              setGenreList((prev) => [...prev, ...arr]);
            } else {
              handleRoute(e.target.name);
            }
          }}
        />
        {"  "}
        <label>Adventure</label>
      </div>
      <div>
        <input
          style={{
            marginLeft: "10px",
            marginBottom: "10px",
            padding: "5px",
          }}
          type="checkbox"
          name="Action"
          checked={getAllParams.includes("Action")}
          onChange={(e) => {
            let arr = [];
            if (e.target.checked && !genreList.includes(e.target.name)) {
              arr.push(e.target.name);
              setGenreList((prev) => [...prev, ...arr]);
            } else {
              handleRoute(e.target.name);
            }
          }}
        />
        {"  "}
        <label>Action</label>
      </div>
      <div>
        <input
          style={{
            marginLeft: "10px",
            marginBottom: "10px",
            padding: "5px",
          }}
          type="checkbox"
          name="Horror"
          checked={getAllParams.includes("Horror")}
          onChange={(e) => {
            let arr = [];
            if (e.target.checked && !genreList.includes(e.target.name)) {
              arr.push(e.target.name);
              setGenreList((prev) => [...prev, ...arr]);
            } else {
              handleRoute(e.target.name);
            }
          }}
        />
        {"  "}
        <label>Horror</label>
      </div>
      <div>
        <input
          style={{
            marginLeft: "10px",
            marginBottom: "10px",
            padding: "5px",
          }}
          type="checkbox"
          name="Racing"
          checked={getAllParams.includes("Racing")}
          onChange={(e) => {
            let arr = [];
            if (e.target.checked && !genreList.includes(e.target.name)) {
              arr.push(e.target.name);
              setGenreList((prev) => [...prev, ...arr]);
            } else {
              handleRoute(e.target.name);
            }
          }}
        />
        {"  "}
        <label>Racing</label>
      </div>
      <div>
        <input
          style={{
            marginLeft: "10px",
            marginBottom: "10px",
            padding: "5px",
          }}
          type="checkbox"
          name="Puzzle"
          checked={getAllParams.includes("Puzzle")}
          onChange={(e) => {
            let arr = [];
            if (e.target.checked && !genreList.includes(e.target.name)) {
              arr.push(e.target.name);
              setGenreList((prev) => [...prev, ...arr]);
            } else {
              handleRoute(e.target.name);
            }
          }}
        />
        {"  "}
        <label>Puzzle</label>
      </div>
      <div>
        <label>Sort by</label>
        <div>
          <input
            type="checkbox"
            name="price"
            onChange={() => {
              setSort((prev) => !prev);
              query = location.search + "&_sort=price&_order=asc";
              location.search = query;
              navigate(location);
            }}
          />
          <label>Price</label>
        </div>
      </div>
      <div className="gamesContainer">
        {games.map((ele, i) => {
          return (
            <div className="">
              <GameCard ele={ele} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
