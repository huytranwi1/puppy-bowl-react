import {  useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPlayerForm(){

    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState("")
    

    async function handleSubmit(e) {
        e.preventDefault(e)

        try{
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-D/players", {
                method: "POST",
                body: JSON.stringify({
                    name, breed, status
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json()
            console.log(result)
        } catch(error) {
            console.error(error)
        }
    }    

    return(

    <section className="new-player">
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input type="text" value={name} onChange={e=>{setName(e.target.value)}}/>
            </label>
            <label>
                breed: <input type="text" value={breed} onChange={e=>{setBreed(e.target.value)}} />
            </label>
            <label>
                Status: <input type="text" value={status} onChange={e=>{setStatus(e.target.value)}}  />
            </label>
            <button type="submit" >Submit</button>
            <button onClick={() => {navigate("/")}}>Back</button>
        </form>
    </section>
    )
}