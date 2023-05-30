import { serverUrl } from "../configs/url";
import bcrypt from "bcryptjs";
// not test yet
export const login = (account: string, password: string) => {
	return fetch(serverUrl + "/login", {
		method: "POST",
		body: JSON.stringify({
			ID: account,
			password: password,
		}),
	})
		.then((res) => {
			if (res.status !== 200) {
				throw new Error(res.status);
			}
			return res.json();
		})
		.catch((err) => {
			return 0;
		});
};

export const register = (account: string, password: string) => {
	return fetch(serverUrl + "/register", {
		method: "POST",
		body: JSON.stringify({
			ID: account,
			password: password,
		}),
	})
		.then((res) => {
			if (res.status !== 200) {
				throw new Error(res.status);
			}
			return res.json();
		})
		.catch((err) => {
			console.log(err);
			return err;
		});
};

export const logout = () => {
	// auth in userContext will be set to false if cookie is cleared.
	Cookies.remove("token", { path: "", domain: "localhost:5173" });
	window.location.reload();
};
