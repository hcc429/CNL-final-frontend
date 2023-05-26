interface titleType {
	chiildren: string;
	className?: string;
}

export default function Title(props: titleType): JSX.Element {
	const { children, className } = props;
	return <div className={`${className}`}>{children}</div>;
}
