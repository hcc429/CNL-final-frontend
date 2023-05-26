import * as React from "react";

export interface inputType extends React.InputHTMLAttributes<HTMLInputElement> {
	ref: HTMLElement | null;
	required?: boolean;
}

const Input: React.FC<inputType> = React.forwardRef((inputProps, ref) => {
	return <input className="border-2 border-gray-500 rounded-md" ref={ref} {...inputProps} />;
});
export default Input;
