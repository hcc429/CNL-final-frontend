import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LogoutBtn from "./LogoutBtn";
import { navList } from "../configs/navList";
import logo from "../assets/logo.png";
interface navItemType {
	url: string;
	children: string;
}

export default function NavBar() {
	const auth = useAuth(false);

	const NavItem = (props: navItemType) => {
		return (
			<div className="text-white m-4">
				<Link to={props.url} style={{ textDecoration: "none" }} className="link">
					{props.children}
				</Link>
			</div>
		);
	};

	const Navlist = () => {
		if (!auth) {
			return null;
		}
		return (
			<>
				{navList.map((item) => (
					<NavItem key={item.url} url={item.url}>
						{item.text}
					</NavItem>
				))}
				<LogoutBtn />
			</>
		);
	};

	return (
		<nav className="sticky top-0 z-50">
			<div className="flex flex-row bg-primary items-center gap-4">
				<a href="/">
					<img src={logo} width="200"></img>
				</a>
				<div className="m-auto"></div>
				<div className="flex flex-row">
					<Navlist />
				</div>
			</div>
		</nav>
	);
}
