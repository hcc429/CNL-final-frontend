import { paginationType } from "../components/Pagination";

export const initState: paginationType = {
	data: [],
	offset: 0,
	numberPerPage: 5,
	pageCount: 0,
	currentData: [],
	selected: 0,
};
