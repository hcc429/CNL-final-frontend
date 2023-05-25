import { useState, useEffect } from "react";
import { paginationType } from "../components/Pagination";

export default function usePagination(initData) {
	const initState = {
		data: [],
		offset: 0,
		numberPerPage: 5,
		pageCount: 0,
		currentData: [],
		selected: 0,
	};

	const [pagination, setPagination] = useState<paginationType>(initState);

	useEffect(() => {
		setPagination({ ...initState, data: initData });
	}, []);

	return [pagination, setPagination];
}
