import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import { useRef, useState } from "react";
import { startRollcall } from "../utils/rollcall";
import Cookies from "js-Cookie";

export default function SettingForm(): JSX.Element {
	const [disabled, setDisabled] = useState<boolean>(false);
	const courseNameRef = useRef<HTMLInputElement | null>();
	const courseKeyGeneratorRef = useRef<HTMLInputElement | null>();
	const rollCallDurationRef = useRef<HTMLInputElement | null>();
	return (
		<div className="flex w-1/2 m-4 flex-col justify-center items-center border-r-2 gap-y-2">
			<Title className="text-2xl">Roll Call Settings</Title>
			<form
				className="flex flex-col"
				onSubmit={async (e) => {
					e.preventDefault();
					if (disabled == false) {
						const res = await startRollcall(
							courseKeyGeneratorRef.current?.value,
							rollCallDurationRef.current?.value
						);
						console.log(res);
						Cookies.set("courseName", courseNameRef.current?.value, {
							expires: 7,
							path: "",
						});
						Cookies.set("courseKey", res, {
							expires: 7,
							path: "",
						});
					}
					setDisabled((prev) => !prev);
				}}
			>
				<Input
					ref={courseNameRef}
					title={"Course Name"}
					className="w-11/12"
					disabled={disabled}
					required
				/>
				<Select
					ref={rollCallDurationRef}
					title={"Roll Call Duration"}
					className="w-11/12"
					disabled={disabled}
				></Select>
				<Input
					ref={courseKeyGeneratorRef}
					title={"Generate Course Key"}
					className="w-11/12"
					disabled={disabled}
					required
				/>
				<Button type="submit">{!disabled ? "Start" : "End"}</Button>
			</form>
		</div>
	);
}
