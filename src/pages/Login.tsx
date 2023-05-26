import Button from "../components/Button";
import Input from "../components/Input";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
export default function Login(): JSX.Element {
	const navigate = useNavigate();
	const acc = useRef<HTMLInputElement | null>();
	const pwd = useRef<HTMLInputElement | null>();
	return (
		<div className="border w-1/2 m-auto text-center">
			<form
				onSubmit={() => {
					document.cookie = "token=123";
					navigate("/");
					window.location.reload();
				}}
			>
				<Title>welcome back</Title>
				<div>
					<label>account*</label>
					<Input ref={acc} required />
				</div>
				<div>
					<label>password*</label>
					<Input ref={pwd} required />
				</div>
				<Button type="submit">sign in</Button>
				<div>
					Haven't has password? <a>Sign up</a>
				</div>
			</form>
		</div>
	);
}
