import * as React from "react";
import { optList } from "../configs/optList";

export interface selectType extends React.InputHTMLAttributes<HTMLSelectElement> {
	ref: HTMLElement | null;
	title: string;
	required?: boolean;
	className?: string;
	disabled?: boolean;
}

const Select: React.FC<selectType> = React.forwardRef((props, ref) => {
	let title: string = props.title ?? "";
	const className: string = props.className;
	// className in props will be appended to the end of defaultCss, and have higher priority
	const defaultCss = "flex flex-col text-left m-4 ";
	const style: string = defaultCss + className ?? "";
	title += props.required ? "*" : "";
	return (
		<div className={style}>
			<div className="text-xl text-primary">{title}</div>
			<select
				className="border-2 border-gray-500 rounded-md w-full p-1 pl-2 text-xl"
				ref={ref}
				required={props.required ?? false}
				disabled={props.disabled ?? false}
			>
				{optList.map((option) => {
					return (
						<option key={option.value} value={option.value}>
							{option.opt}
						</option>
					);
				})}
			</select>
		</div>
	);
});
export default Select;
