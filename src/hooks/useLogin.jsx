import React, { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
const useLogin = () => {
	const { dispatch, signIn } = useAuthContext();
	const [pending, setPending] = useState(false);
	const [error, setError] = useState(null);
	const login = async (email, password) => {
		setPending(true);
		setError(null);
		try {
			const res = await signInWithEmailAndPassword(auth, email, password);
			signIn(res.user);
			setPending(false);
			console.log(res.user);
		} catch (err) {
			setError(err.message);
			setPending(false);
			console.log("error: ", err.message);
		}
	};
	return { error, pending, login };
};

export { useLogin };
