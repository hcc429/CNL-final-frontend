import { useEffect } from "react";
import main from "../assets/main.png";
import LoginForm from "../forms/LoginForm";
import useAuth from "../hooks/useAuth";

export default function Login(): JSX.Element {
	const auth = useAuth(false);
	useEffect(() => {
		if (auth) {
			window.location.href = "/";
		}
	}, []);
	return (
		<div className="flex items-center w-9/12 m-auto text-center h-200 mt-20">
			<div className="flex items-center bg-contain">
				<img src={main}></img>
			</div>
			<LoginForm />
		</div>
	);
}
