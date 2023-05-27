interface titleType {
	chiildren: string;
	className?: string;
}

export default function Title(props: titleType): JSX.Element {
	// className in props will be appended to the end of defaultCss, and have higher priority
	const { children, className } = props;
	const defaultCss = "m-4 text-primary text-5xl ";
	const style = defaultCss + className ?? "";
	return <div className={style}>{children}</div>;
}
