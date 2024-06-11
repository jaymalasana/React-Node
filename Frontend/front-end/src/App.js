import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route
              path="/"
              element={
                <ProductList />
              }
            />
            <Route path="/add" element={<AddProduct />} />
            <Route
              path="/update"
              element={
                <h1 className="w-full bg-[#456990] text-3xl h-20 text-[#d6b880]">
                  Update Product Component
                </h1>
              }
            />
            <Route
              path="/logout"
              element={
                <h1 className="w-full bg-[#456990] text-3xl h-20 text-[#d6b880]">
                  Logout Component
                </h1>
              }
            />
            <Route
              path="/profile"
              element={
                <h1 className="w-full bg-[#456990] text-3xl h-20 text-[#d6b880]">
                  Profile Component
                </h1>
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
