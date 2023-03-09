import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogOut";
const Navbar = () => {
	const { user } = useAuthContext();
	const { logOut } = useLogout();
	return (
		<div className="bg-purple-700 ">
			<div className="flex z-10 items-center justify-between mx-auto max-w-screen-lg text-xl mb-5 py-5 px-5 text-white">
				<Link to={"/"}>
					<h1 className="text-4xl font-bold">Finance Tracker</h1>
				</Link>
				<nav className="flex gap-3">
					{!user && (
						<>
							<Link className="font-bold" to={"/login"}>
								Login
							</Link>
							<Link className="font-bold" to={"/signup"}>
								SignUp
							</Link>
						</>
					)}
					{user && (
						<button
							onClick={() => {
								logOut();
							}}
							className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none border-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
							Log Out
						</button>
					)}
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
