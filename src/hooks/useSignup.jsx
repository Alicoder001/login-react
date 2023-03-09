import React, { useState } from "react";

import {
	auth,
	createUserWithEmailAndPassword,
	updateProfile,
} from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
const useSignup = () => {
	const { signIn } = useAuthContext();
	const [pending, setPending] = useState(false);
	const [error, setError] = useState(null);
	const [user, setUser] = useState(null);
	const signUp = async (name, email, password) => {
		setPending(true);
		setError(null);
		try {
			const res = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			if (!res) {
				throw new Error("Could not Completed signUp !");
			}

			await updateProfile(auth.currentUser, { displayName: name });
			
			setPending(false);
			setUser(res);
		} catch (err) {
			setError(err.message);
			setPending(false);
			console.log("error: ", err.message);
		}
	};
	return { error, pending, signUp };
};

export default useSignup;
