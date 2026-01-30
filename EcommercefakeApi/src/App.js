import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { cartReducer, initialState } from "./reducers/cartReducer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

 const loaclinitialstate = () =>{
    const storages = localStorage.getItem("cartdetails");
    return storages ? JSON.parse(storages) : initialState;
  }


function App() {
  const [state, dispatch] = useReducer(cartReducer, loaclinitialstate());

   useEffect(() =>{
    localStorage.setItem("cartdetails",JSON.stringify(state))
  },[state]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home state={state} dispatch={dispatch} />} />
        <Route path="/cart" element={<Cart state={state} dispatch={dispatch} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
