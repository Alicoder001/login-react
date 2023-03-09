import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div className="p-5 mx-auto max-w-screen-lg text-2xl">
			<Link
				className=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
				to={"/transaction"}>
				Go to Transaction
			</Link>
		</div>
	);
};

export default Home;
