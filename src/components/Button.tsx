interface buttonType {
	type?: "submit" | "button" | null;
	children: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
}

export default function Button(props: buttonType): JSX.Element {
	const { type, children, onClick, className, disabled } = props;
	const defaultCss = "bg-secondary text-white rounded-md h-8 w-10/12 mt-5 m-auto ";
	const style = defaultCss + className ?? "";
	return (
		<button
			className={style}
			type={type ?? "button"}
			onClick={onClick ?? null}
			disabled={disabled ?? false}
		>
			{children}
		</button>
	);
}
