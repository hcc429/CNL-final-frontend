import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function LogoutBtn(): JSX.Element {
	const navigate = useNavigate();
	return (
		<Button
			onClick={() => {
				document.cookie = "token=;max-age=10";
				navigate("/login");
				window.location.reload();
			}}
		>
			logout
		</Button>
	);
}
