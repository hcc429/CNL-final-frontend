import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export interface authType {
	auth: boolean;
	setAuth: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<authType>();
export const UserContextProvider = ({ children }: { children: JSX.Element[] | null }) => {
	const [auth, setAuth] = useState<boolean>(false);
	useEffect(() => {
		const token = Cookies.get("token");
		if (token) {
			setAuth(true);
		}
	}, []);
	return (
		<UserContext.Provider
			value={{
				auth,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContext;
