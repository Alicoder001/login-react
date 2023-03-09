import React from "react";
import { Navigate } from "react-router-dom";
const Protected = ({ isSignedIn, children }) => {
	if (!isSignedIn) {
		return <Navigate to={"/login"} />;
	}
	return children;
};
const ProtectedHome = ({ isSignedIn, children }) => {
	if (isSignedIn) {
		return <Navigate to={"/"} />;
	}
	return children;
};
const ProtectedTr = ({ isSignedIn, children }) => {
	if (!isSignedIn) {
		return <Navigate to={"/login"} />;
	}
	return children;
};

export { Protected, ProtectedHome, ProtectedTr };
