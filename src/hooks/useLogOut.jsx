import React, { useState } from "react";

import { auth, signOut } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
const useLogout = () => {
	const { dispatch } = useAuthContext();
	const [pending, setPending] = useState(false);
	const [error, setError] = useState(null);
	const [user, setUser] = useState(null);
	const logOut = async () => {
		setPending(true);
		setError(null);
		console.log("salom");
		try {
			await signOut(auth);
			setPending(false);
			dispatch({ type: "logout" });
		} catch (err) {
			setError(err.message);
			setPending(false);
			console.log("error: ", err.message);
		}
	};
	return { error, pending, logOut };
};

export { useLogout };
