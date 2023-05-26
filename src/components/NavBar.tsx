import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LogoutBtn from "./LogoutBtn";
import { navList } from "../configs/navlist";

export default function NavBar() {
	const auth = useAuth();

	const NavItem = (props) => {
		return (
			<div className="">
				<Link to={props.url} style={{ textDecoration: "none" }} className="link">
					{props.children}
				</Link>
			</div>
		);
	};

	return (
		<nav className="">
			<div className="">
				{auth ? (
					navList.map((item) => (
						<NavItem key={item.url} url={item.url}>
							{item.text}
						</NavItem>
					))
				) : (
					<div>hi</div>
				)}
				<LogoutBtn />
			</div>
		</nav>
	);
}
