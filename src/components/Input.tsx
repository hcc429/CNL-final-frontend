import * as React from "react";

export interface inputType extends React.InputHTMLAttributes<HTMLInputElement> {
	ref: HTMLElement | null;
	title: string;
	required?: boolean;
	className?: string;
	disabled?: boolean;
}

// className in props will be appended to the end of defaultCss, and have higher priority
const Input: React.FC<inputType> = React.forwardRef((props, ref) => {
	let title: string = props.title ?? "";
	const className: string = props.className;
	const defaultCss = "flex flex-col text-left m-4 ";
	const style: string = defaultCss + className ?? "";
	title += props.required ? "*" : "";
	return (
		<div className={style}>
			<div className="text-xl text-primary">{title}</div>
			<input
				ref={ref}
				className="border-2 border-gray-500 rounded-md w-full p-1 pl-2 text-xl"
				required={props.required ?? false}
				disabled={props.disabled ?? false}
			/>
		</div>
	);
});
export default Input;
