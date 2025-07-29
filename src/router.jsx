import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CVPage from "./CVPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </BrowserRouter>
  );
}
