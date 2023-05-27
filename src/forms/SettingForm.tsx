import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import { useRef, useState } from "react";
import { startRollcall } from "../utils/rollcall";

export default function SettingForm(): JSX.Element {
	const [disabled, setDisabled] = useState<boolean>(false);
	const courseNameRef = useRef<HTMLInputElement | null>();
	const courseKetGeneratorRef = useRef<HTMLInputElement | null>();
	const rollCallDurationRef = useRef<HTMLInputElement | null>();
	return (
		<div className="flex w-4/12 m-4 flex-col justify-center items-center  border-r-2 gap-y-2 ">
			<Title className="text-3xl">Roll Call Settings</Title>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					// const res = await startRollcall();
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
					ref={courseKetGeneratorRef}
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
