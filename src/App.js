import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Navbar from "./Component/Navbar/Navbar";
import Dashboard from "./Page/Dashboard";
import Login from "./Page/Login";
import Hotel from "./Page/Hotel";
import NewHotel from "./Page/NewHotel";
import NewRoom from "./Page/NewRoom";
import Room from "./Page/Room";
import Transaction from "./Page/Transaction";
import EditHotel from "./Page/EditHotel";
import EditRoom from "./Page/EditRoom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="hotels" element={<Hotel />}></Route>
          <Route path="newhotel" element={<NewHotel />}></Route>
          <Route path="edithotel/:id" element={<EditHotel />}></Route>
          <Route path="rooms" element={<Room />}></Route>
          <Route path="newroom" element={<NewRoom />}></Route>
          <Route path="editroom/:id" element={<EditRoom />}></Route>
          <Route path="trans" element={<Transaction />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
