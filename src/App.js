import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./features/todos/Todos";
import Welcome from './components/Welcome';
import AddTodoForm from './features/todos/AddTodoForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/movies" element={<Home />} />
                <Route path="/todos" element={<Todos />} />
                <Route path="/add-todo" element={<AddTodoForm />} />
            </Routes>
        </Router>
    );
}

export default App;
