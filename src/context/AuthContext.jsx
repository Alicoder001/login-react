import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChanged, auth } from "../firebase/config";
export const AuthContext = createContext();
const authReducer = (state, action) => {
	switch (action.type) {
		case "AuthChange":
			return { ...state, user: action.payload, authChange: true };
		case "change-Color":
			return { ...state, color: action.payload };
		case "logout":
			return { ...state, user: null };
		case "login":
			return { ...state, user: action.payload, authChange: true };
		default:
			return state;
	}
};
export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
		authChange: false,
	});

	const changeColor = (color) => [
		dispatch({ type: "change-Color", payload: color }),
	];
	const signIn = (user) => [
		dispatch({ type: "login", payload: user }),
	];
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			dispatch({ type: "AuthChange", payload: user });
		});
	}, []);
	console.log(state);
	return (
		<AuthContext.Provider value={{ ...state, changeColor, dispatch,signIn }}>
			{children}
		</AuthContext.Provider>
	);
};
