import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPlayerForm(){

    const navigate = useNavigate()

    const [newPlayer, setNewPlayer] = useState([]);
    

    async function addNewPlayer(playerObj) {

        try{
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-D/players", {
                method: "POST",
                body: JSON.stringify(playerObj),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json()
            console.log(result.data.players)
        } catch(error) {
            console.error(error)
        }
    }    
    useEffect(() => {
        addNewPlayer(newPlayer)
    },[newPlayer] )

    return(


        <div>

            <form className="newPlayerForm" onSubmit={(e)=>{setNewPlayer({
                name:e.target.name.value,
                breed:e.target.breed.value,
            })}}>
                <h1>Please Add New Player Info</h1>
                <label>
                    Name: <input type="text" name="name" />
                </label>
                <label>
                    Breed: <input type='text' name="breed" />
                </label>
                <label>
                    Status: <input type='text' name="status" />
                </label>
                
                <button type="submit" name="Submit">Submit</button>

                <button onClick={() => {navigate("/")}}>Back</button>
            </form>
        </div>
    )
}