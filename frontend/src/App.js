import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AdminLogin from "./components/login";
import Addbook from "./components/addbook";
import Delete from "./components/delete";
import EditBook from "./components/editbook";
import DetailView from "./components/detailview";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="/addbook" element={<Addbook />}></Route>
          <Route path="/delete/:id" element={<Delete />}></Route>
          <Route path="/edit/:id" element={<EditBook />}></Route>
          <Route path="/detail/:id" element={<DetailView />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
