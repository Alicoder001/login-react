import React, { useEffect, useState } from "react";
import useSignup from "../../hooks/useSignup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useAuthContext } from "../../hooks/useAuthContext";
const SignUp = () => {
	const { changeColor, color, signIn, user } = useAuthContext();
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rePassword, setRePassword] = useState("");
	const { error, pending, signUp } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();
		signUp(name, email, password);
	};

	return (
		<div>
			<form
				style={{ backround: color }}
				className="max-w-md mx-auto"
				onSubmit={handleSubmit}>
				<h1 className="text-4xl mb-10 font-bold">Sign Up</h1>
				<div className="mb-6">
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						display name
					</label>
					<input
						onChange={(e) => {
							setName(e.target.value);
						}}
						type="text"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="display name"
						required
					/>
				</div>
				<div className="mb-6">
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						email
					</label>
					<input
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						type="email"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="email"
						required
					/>
				</div>
				<div className="mb-6">
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						password
					</label>
					<input
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						type="password"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="password"
						required
					/>
				</div>
				<div className={"mb-6"}>
					<label
						className={
							"block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						}>
						repassword
					</label>
					<input
						onChange={(e) => {
							setRePassword(e.target.value);
						}}
						type="password"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="repassword"
						required
					/>
				</div>
				{!pending && (
					<button
						type="submit"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Sign Up
					</button>
				)}
				{pending && (
					<button
						type="submit"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Loading...
					</button>
				)}
				{error && <div>{error}</div>}
			</form>
		</div>
	);
};

export default SignUp;
