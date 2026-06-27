import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Portfolio from "./pages/Portfolio";
import Admin from "./pages/Admin";

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <div className="App grain">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0F0F0F",
            color: "#F7F5F0",
            border: "1px solid #FF4500",
            borderRadius: 0,
            fontFamily: "DM Sans, sans-serif",
          },
        }}
      />
    </div>
  );
}

export default App;
