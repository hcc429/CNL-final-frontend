import main from "../assets/main.png";
import LoginForm from "../forms/LoginForm";

export default function Login(): JSX.Element {
	return (
		<div className="flex items-center w-9/12 m-auto text-center h-200 mt-20">
			<div className="flex items-center bg-contain">
				<img src={main}></img>
			</div>
			<LoginForm />
		</div>
	);
}
