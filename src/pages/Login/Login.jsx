import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
const Login = () => {
	const { login } = useLogin();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordShow, setPasswordShow] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className="max-w-md mx-auto">
				<h1 className={"text-4xl mb-10 font-bold"}>Login</h1>
				<div className={"mb-6"}></div>
				<div className="mb-6">
					<label
						className={
							"block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						}>
						email
					</label>
					<input
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						type="email"
						className={
							"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						}
						placeholder="email"
						required
					/>
				</div>
				<div className={"mb-6 relative"}>
					<label
						className={
							"block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						}>
						password
					</label>
					<input
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						type={!passwordShow ? "password" : "text"}
						className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="password"
						required
					/>
					<div
						onClick={() => {
							setPasswordShow(!passwordShow);
						}}
						className="absolute top-[35px] z-10 right-2 cursor-pointer">
						show
					</div>
				</div>

				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
