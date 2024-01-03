import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "React-router-dom";
import Chat from "@/component/chat/index.js"


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
