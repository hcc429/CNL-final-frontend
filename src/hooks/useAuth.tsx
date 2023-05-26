import { useContext, useEffect } from "react";
import UserContext from "../contexts/Auth";
import { useNavigate } from "react-router-dom";
import { authType } from "../contexts/Auth";
import Cookies from "js-cookie";

export default function useAuth(): boolean {
	const userState: authType = useContext(UserContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (!userState.auth && !Cookies.get("token")) {
			navigate("/login");
		}
	}, []);
	return userState.auth;
}
