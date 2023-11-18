import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

ReactDOM.createRoot(document.getElementById("footer")).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);
