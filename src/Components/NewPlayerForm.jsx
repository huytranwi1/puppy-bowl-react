import {  useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPlayerForm(){

    const navigate = useNavigate()
    const [players,setPlayers] = useState([])
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("Bench")
    

    async function handleSubmit(e) {
        e.preventDefault()


        try{
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-D/players`, {
                method: "POST",
                body: JSON.stringify({name, breed, status}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json()
            console.log(result)
            setPlayers(result.data)

        } catch(error) {
            console.error(error)
        }
    }    

    return(

        <div className="create-new-player">
            <h1>New player</h1>
            <form onSubmit={handleSubmit}>

                <label>
                    Name: <input type="text" value={name} onChange={e=>{setName(e.target.value)}} />
                </label>
                <label>
                    Breed: <input type="text" value={breed} onChange={e=>{setBreed(e.target.value)}} />
                </label>
                <label>
                    Status: <input type="text" value={status} onChange={e=>{setStatus(e.target.value)}} />
                </label>

                <button type="Submit">Create</button>
                <button onClick={() => {navigate("/")}}>Back</button>
            </form> 

        </div>
    )
}