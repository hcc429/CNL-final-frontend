import { Link } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

export default function NavBar() {
	// const { auth, userData } = useAuth();
	const NavItem = (props) => {
		return (
			<div className="">
				<Link to={props.url} style={{ textDecoration: "none" }} className="link">
					{props.children}
				</Link>
			</div>
		);
	};
	const navList = [
		{
			text: "Home",
			url: "/",
		},
		{
			text: "Student",
			url: "/studentlist",
		},
	];

	return (
		<nav className="">
			<div className="">
				{navList.map((item) => (
					<NavItem key={item.url} url={item.url}>
						{item.text}
					</NavItem>
				))}
				<button>logout</button>
			</div>
		</nav>
	);
}
