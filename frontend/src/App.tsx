import { BrowserRouter, Route, Routes } from "react-router-dom";
import Getclient from "./components/Getclient";
import GetSingleclient from "./components/GetSingleclient";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetSingleclient />} />
        <Route path="/clientdata" element={<Getclient />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
