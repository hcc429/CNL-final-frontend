import { useState, useEffect } from "react";
import { paginationType } from "../components/Pagination";
import { initState } from "../configs/pagInit";

export default function usePagination(initData) {
	const [pagination, setPagination] = useState<paginationType>(initState);

	useEffect(() => {
		setPagination({ ...initState, data: initData });
	}, []);

	return [pagination, setPagination];
}
