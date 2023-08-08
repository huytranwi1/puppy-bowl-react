import { useState, useEffect } from "react"

const API_URL ="https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-D"

export default function AllPlayers(){

    const [players, setPlayers] = useState([{name:"huy"}]);

    useEffect(()=>{
        async function fetchAllPlayers(){
            try {
                const response = await fetch(`${API_URL}/players`);
                const data = await response.json();
                console.log({data})
                setPlayers(data.data.players)
            } catch (error) {
                console.error(error)
            }
        }
         fetchAllPlayers()
    }, [])

    useEffect(()=> {
        console.log(players)
    }, [players])
    return(
        <>
        <h1>hello</h1>
            {players.length >0 ? players.map((player, index) => {
                return (
                    <div key={index}>
                        <h4>{player.name}</h4>
                    </div>
                )
            }): null}
        </>
    )
}