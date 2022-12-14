import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />}></Route>
          <Route path="/offers" element={<Offers />}></Route>
          <Route path="/profile" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/forget-password" element={<ForgotPassword />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
