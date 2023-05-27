import notFound from "../assets/notFound.png";
export default function NotFound(): JSX.Element {
	return (
		<div className="flex w-fit m-auto mt-10 text-center text-xl">
			<img src={notFound} width="600"></img>
		</div>
	);
}
