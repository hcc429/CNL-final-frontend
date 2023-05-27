import useAuth from "../hooks/useAuth";
import head from "../assets/head.png";

export default function Home(): JSX.Element {
	useAuth();
	return (
		<div className="w-fit flex items-center m-auto text-center h-4/5">
			<div className="text-5xl text-primary">誰還沒到 誰還敢沒到</div>
			<img src={head} width="600"></img>
		</div>
	);
}
