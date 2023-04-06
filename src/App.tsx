import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import EnterLottery from "./pages/EnterLottery";
import MintToken from "./pages/MintToken";



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<MintToken />} />
        <Route path="/enter-lottery" element={<EnterLottery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
