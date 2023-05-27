import { serverUrl } from "../configs/url";


// not test yet
export const login = (account: string, password: string) => {
	return fetch(serverUrl + "/login", {
		method: "POST",
		body: JSON.stringify({
			account: account,
			password: password,
		}),
	})
		.then((res) => {
			return res;
		})
		.catch((err) => {
			return err;
		});
};

export const register = (account: string, password: string) => {
	return fetch(serverUrl + "/register", {
		method: "POST",
		body: JSON.stringify({
			account: account,
			password: password,
		}),
	})
		.then((res) => {
			return res;
		})
		.catch((err) => {
			return err;
		});
};

export const logout = () => {
	// auth in userContext will be set to false if cookie is cleared.
	Cookies.remove("token", { path: "", domain: "localhost:5173" });
	window.location.reload();
};
