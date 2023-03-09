import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { Protected, ProtectedHome, ProtectedTr } from "./Components/Protected";
import Transaction from "./pages/Transaction/Transaction";
const App = () => {
	const { authChange, color, user } = useAuthContext();

	console.log(authChange);
	return (
		<div style={{ background: color }} className=" font-sans ">
			{authChange && (
				<Router>
					<Navbar />
					<div>
						<Routes>
							<Route
								path="/"
								element={
									<Protected isSignedIn={user}>
										<Home />
									</Protected>
								}
							/>
							<Route
								path="/signup"
								element={
									<ProtectedHome isSignedIn={user}>
										<SignUp />
									</ProtectedHome>
								}
							/>
							<Route
								path="/login"
								element={
									<ProtectedHome isSignedIn={user}>
										<Login />
									</ProtectedHome>
								}
							/>
							<Route
								path="/transaction"
								element={
									<ProtectedTr isSignedIn={user}>
										<Transaction />
									</ProtectedTr>
								}
							/>
						</Routes>
					</div>
				</Router>
			)}
		</div>
	);
};

export default App;
