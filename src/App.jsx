import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personal_Info from "./components/Personal_Info";
import Home from "./components/Home";
import Work_Exp from "./components/Work_Exp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/personal-info" element={<Personal_Info />}></Route>
        <Route path="/work-experience" element={<Work_Exp />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
