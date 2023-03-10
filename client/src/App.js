import "./App.css";
import Students from "./components/Students";
import Student from "./components/Student";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import NewStudent from "./components/NewStudent";

function App() {
  return (
    <div className="App bg-blue-100 h-screen">
      <Header />
      <div className="flex items-center justify-content-center">
        <Routes>
          <Route path="/" element={<Students />} />
          <Route path="/students/:studentId" element={<Student />} />
          <Route path="/new" element={<NewStudent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
