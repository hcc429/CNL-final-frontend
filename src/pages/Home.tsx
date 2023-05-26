import useAuth from "../hooks/useAuth";

export default function Home(): JSX.Element {
	const auth = useAuth();
	console.log("auth: ", auth);
	return (
	<div className="flex items-center w-9/12 m-auto text-center h-4/5">
		This is Home Page !!
	</div>);
}
