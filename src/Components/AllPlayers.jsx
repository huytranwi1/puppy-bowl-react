import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {

  const navigate = useNavigate();

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchAllPlayers() {
      try {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-D/players");
        const result = await response.json();
        console.log({ result });
        setPlayers(result.data.players);
      } catch (error) {
        console.error("no fetching for you haha!, try again", error);
      }
    }
    fetchAllPlayers();
  }, []);

  useEffect(() => {
    console.log(players);
  }, [players]);

  return (
    <div className="allPlayers">
      <div>
        <h1>Players</h1>
      </div>
    {players.length > 0  ? players.map((player) => {
      return(
        <div key={player.id}>
             <h4>{player.name}</h4>
              <img src={player.imageUrl} width="50px" height="50px"/>
              <div className="detail">
                <button onClick={()=>{navigate("/singlePlayerId")}}>detail</button>
              </div>

        </div>
      )
    }) : null}

 <div className="add-player-form">
        <button onClick={()=>{navigate("/newPlayerForm")}}>Add</button>
      </div>

  </div> 
  )
}