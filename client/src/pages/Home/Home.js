import Login from "../login/Login.js";
import Register from "../Register/Register";

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
function Home() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default Home;
