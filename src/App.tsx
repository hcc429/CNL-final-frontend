import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import StudentList from "./pages/StudentList";
import Register from "./pages/Register";

function App() {
	return (
		<>
			<Router>
				<NavBar />
				<div id="body">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/studentlist" element={<StudentList />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
