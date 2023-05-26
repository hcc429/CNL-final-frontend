import useAuth from "../hooks/useAuth";

export default function Home(): JSX.Element {
	const auth = useAuth();
	console.log("auth: ", auth);
	return <div className="underline">This is Home Page !!</div>;
}
