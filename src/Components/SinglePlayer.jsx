import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function SinglePlayer() {

  const {id} = useParams()
  const navigate = useNavigate()

    const [playerInfo, setPlayerInfo] = useState([])

    useEffect(() => {
        async function fetchSinglePlayer() {
            try {
                const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-D/players/${id}`);
                const result = await response.json();
                console.log(result)
                setPlayerInfo(result.data.player)
            } catch (error){
                console.error(error)
            }
        }
        fetchSinglePlayer()
    }, [id])

    useEffect(() => {
      console.log(playerInfo)
    }, [playerInfo])

        async function deleteHandler(){
      try{
        const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-D/players/${id}`,{
          method: "DELETE"
        })
        const data = await response.json()
        console.log(data)
        return data
      } catch(error) {
        console.error(error)
      }
    }

    return(


    <div className="single-player">
      <div className="player-details">
        <ul>
          <li>Id: {playerInfo.id}</li>
          <li>Name: {playerInfo.name}</li>
          <li>Breed: {playerInfo.breed}</li>
          <li>Status: {playerInfo.status}</li>
        </ul>
        <button onClick={deleteHandler}>delete</button>
      </div>
    <button onClick={() => {navigate("/")}}>Back</button>
  </div> 
  )
}