import { useNavigate } from "react-router-dom";

export default function LogoutBtn(): JSX.Element {
	const navigate = useNavigate();
	return (
		<button className="flex text-white items-center m-4"
			onClick={() => {
				document.cookie = "token=;max-age=10";
				navigate("/login");
				window.location.reload();
			}}
		>
			Logout
		</button>
	);
}
