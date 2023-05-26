interface buttonType {
	type?: "submit" | "button" | null;
	children: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: buttonType): JSX.Element {
	const { type, children, onClick } = props;
	return (
		<div>
			<button
				className="border-2 border-gray-500 rounded-md w-40 mt-5"
				type={type ?? "button"}
				onClick={onClick ?? null}
			>
				{children}
			</button>
		</div>
	);
}
