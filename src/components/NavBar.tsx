import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LogoutBtn from "./LogoutBtn";
import { navList } from "../configs/navlist";
import logo from "../assets/logo.png"

export default function NavBar() {
	const auth = useAuth();

	const NavItem = (props) => {
		return (
			<div className="text-white m-4">
				<Link to={props.url} style={{ textDecoration: "none" }} className="link">
					{props.children}
				</Link>
			</div>
		);
	};

	return (
		<nav className="">
			<div className="flex flex-row bg-dark-blue items-center gap-4">
				<a href="/">
					<img src={logo} width="200">
					</img>
				</a>
				<div className="m-auto"></div>
				<div className="flex flex-row">
					{auth ? (
						<>
							{navList.map((item) => (
								<NavItem key={item.url} url={item.url}>
									{item.text}
								</NavItem>
							))}
							<LogoutBtn />
						</>
					) : (
						<div>hi</div>
					)}
				</div>
			</div>
		</nav>
	);
}
