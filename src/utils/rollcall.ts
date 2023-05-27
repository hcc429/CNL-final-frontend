import { serverUrl } from "../configs/url";
import Cookies from "js-cookie";

// not test yet
export const startRollcall = (courseKey: string, duration: string) => {
	return fetch(serverUrl + "/rollcall", {
		method: "POST",
		body: JSON.stringify({
			courseKey: courseKey,
			startTime: new Date().toDateString(),
			duration: duration,
		}),
	})
		.then((res) => {
			return res;
		})
		.catch((err) => {
			return err;
		});
};

export const getRollcallResult = () => {
	const token = Cookies.get("token");
	return fetch(serverUrl + "/rollcall", {
		method: "GET",
		headers: new Headers({
			Authorization: "token " + token,
		}),
	})
		.then((res) => {
			console.log(res);
			return res.json();
		})
		.then((data) => {
			return data;
		})
		.catch((err) => {
			console.log(err.message);
			return [];
		});
};
