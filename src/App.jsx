import { Routes, Route } from "react-router-dom"

import AllPlayers from "./Components/AllPlayers";
import SinglePlayer from "./Components/SinglePlayer";

export default function App() {
    return (
        <>
        <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:id' element={<SinglePlayer />} />
        </Routes>
        </>
    )
}