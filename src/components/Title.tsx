interface titleType {
	chiildren: string;
}

export default function Title(props: titleType): JSX.Element {
	const { children } = props;
	return <div>{children}</div>;
}
