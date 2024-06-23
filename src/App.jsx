import Navbar from "./components/Navbar.jsx";
import NewsBoard from "./components/NewsBoard.jsx";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
}

export default App;
