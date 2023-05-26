import Button from "../components/Button";
import Input from "../components/Input";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import main from "../assets/main.png"


export default function Login(): JSX.Element {
	const navigate = useNavigate();
	const acc = useRef<HTMLInputElement | null>();
	const pwd = useRef<HTMLInputElement | null>();
	return (
		<div className="flex items-center w-9/12 m-auto text-center h-200 ">
			<div className="flex items-center bg-contain">
				<img src={main}></img>
			</div>
			<div className="flex flex-col border p-10 w-100 rounded-2xl h-100">
				<form
					onSubmit={() => {
						document.cookie = "token=123";
						navigate("/");
						window.location.reload();
					}}
				>
					<div className="m-4">
						<div className="text-5xl text-dark-blue">welcome back</div>
					</div>
					<div className="m-4">
						<div className="text-xl text-dark-blue">pleace enter your details</div>
					</div>
					<div className="flex flex-col text-left m-4">
						<div className="text-xl text-dark-blue">account*</div>
						<Input ref={acc} required />
					</div>
					<div className="flex flex-col text-left m-4">
						<div className="text-xl text-dark-blue">password*</div>
						<Input ref={pwd} required />
					</div>
						<Button type="submit">sign in</Button>
					<div>
						Haven't has password? <a>Sign up</a>
					</div>
				</form>
			</div>
		</div>
	);
}
