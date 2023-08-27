import { Routes, Route } from "react-router-dom";

import SinglePlayer from "./Components/SinglePlayer";
import NewPlayerForm from "./Components/NewPlayerForm";
import AllPlayers from "./Components/AllPlayers";


export default function App() {
 
  return (
    <div className="container">
      <div className="main-section">
        <Routes>
          <Route path="/" element={<AllPlayers/>} />
          <Route path="/singlePlayerId/:id" element={<SinglePlayer />} />
          <Route path="/newPlayerForm" element={<NewPlayerForm  />} /> 
        </Routes>
      </div>
    </div>
  );
}
