import { BrowserRouter, Routes, Route } from "react-router-dom";
import LibraryApp from "./libUI/LibraryApp";
import AdminApp from "./admin/AdminApp";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LibraryApp />} />
        <Route path="/admin/*" element={<AdminApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
