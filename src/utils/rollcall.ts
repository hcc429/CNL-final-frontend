import { serverUrl } from "../configs/url";
import Cookies from "js-cookie";

// not test yet
export const startRollcall = (courseKey: string, duration: string) => {
	const duInSec = parseInt(duration);
	const token = Cookies.get("token");
	return fetch(serverUrl + "/rollcall", {
		method: "POST",
		body: JSON.stringify({
			Coursekey: courseKey,
			StartTime: Date.now().toString(),
			EndTime: (Date.now() + duInSec).toString(),
		}),
		headers: new Headers({
			Authorization: token,
		}),
	})
		.then((res) => {
			if (res.status !== 200) {
				throw new Error(res.status);
			}
			return res.json();
		})
		.catch((err) => {
			return err;
		});
};

export const getRollcallResult = (courseKey: string) => {
	const token = Cookies.get("token");
	return fetch(serverUrl + `/rollcall?courseKey=${courseKey}`, {
		method: "GET",
		headers: new Headers({
			Authorization: token,
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
