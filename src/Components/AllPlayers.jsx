import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function AllPlayers() {

  const navigate = useNavigate();

  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchAllPlayers() {
      
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-D/players");
      try {
        const result = await response.json();
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


  const filterPlayers = search ? players.filter((player)=>
  player.name.toLowerCase().includes(search.toLowerCase())
  )
  : players;


  return (

    <div className="all-player">

        <div className="search-players">
            <label>
                Search: <input type="text" placeholder="Search" value={search} onChange={(e) => {setSearch(e.target.value)}} />
            </label>
        </div>

        {filterPlayers ? filterPlayers.map((player) => {
            return (
                <div key={player.id}>
                    <p>{player.name}</p>
                    <img src={player.imageUrl} width="50px" height="50px" />
                    <p>{player.breed}</p>
                    <p>{player.id}</p>
                </div>
            )
        }):null}


    </div>

  )


//  <div className="add-player-form">
//         <button onClick={()=>{navigate("/newPlayerForm")}}>Add</button>
//       </div>
    }