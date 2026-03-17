import { createRoot } from "react-dom/client";
import App from "./app/components/App.jsx";
import "./styles/index.css";
import './tailwind.css';


createRoot(document.getElementById("root")).render(<App />);