import { useEffect, useState } from "react"

export default function SinglePlayer() {

    const [player, setPlayer] = useState ([])

    useEffect(() => {
        async function fetchSinglePlayer(playerId) {
            try {
                const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-D/players/${playerId}`);
                const data = await response.json();
                setPlayer(data)
            } catch (error){
                console.error(error)
            }
        }
        fetchSinglePlayer()
    })

    return(
        <>
           {player.length>0 && player.map((playerid) => {
            return (
                <div key={playerid.name}>
                    <h4>{playerid.name}</h4>
                </div>
            )
           })}
        </>
    )
}