import Button from "../components/Button";
import Input from "../components/Input";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { register } from "../utils/log";

export default function RegisterForm(): JSX.Element {
	const navigate = useNavigate();
	const acc = useRef<HTMLInputElement | null>();
	const pwd = useRef<HTMLInputElement | null>();
	return (
		<div className="flex flex-col border p-10 w-100 rounded-2xl h-100 ml-20">
			<form
				onSubmit={() => {
					// const token = await register();
					// if (token) {
					// 	Cookies.set("token", token, { expires: 7, path: "" });
					// 	navigate("/");
					// }
					document.cookie = "token=123";
					navigate("/");
					window.location.reload();
				}}
			>
				<Title>Register</Title>
				<Title className="text-xl mb-10">Sign up with your details</Title>
				<Input ref={acc} required title={"Account"} />
				<Input ref={pwd} required title={"Password"} />
				<Button type="submit">regiter</Button>
			</form>
		</div>
	);
}
