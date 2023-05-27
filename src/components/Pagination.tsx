import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Dispatch, SetStateAction } from "react";
import studentType from "../pages/StudentList";
// don't change
export interface paginationType {
	data: studentType[];
	offset: number;
	numberPerPage: number;
	pageCount: number;
	currentData: studentType[];
	selected: number;
}

interface PaginationPropsType {
	pagination: paginationType;
	setPagination: Dispatch<SetStateAction<paginationType>>;
}

export default function Pagination(props: PaginationPropsType): JSX.Element {
	const { pagination, setPagination } = props;

	// shift page
	const handlePageClick = (event) => {
		const offset: number = event.selected * pagination.numberPerPage;
		setPagination({ ...pagination, offset });
	};

	useEffect(() => {
		setPagination((prev: paginationType) => {
			const { offset, numberPerPage } = pagination;
			return {
				...prev,
				pageCount: Math.ceil(prev.data.length / prev.numberPerPage),
				currentData: prev?.data?.slice(offset, offset + numberPerPage),
				selected: Math.floor(offset / numberPerPage),
			};
		});
	}, [pagination.numberPerPage, pagination.offset, pagination.data]);
	// Checkout index.css for the "pagination a"
	return (
		<ReactPaginate
			previousLabel={"<<"}
			nextLabel={">>"}
			breakLabel={"..."}
			pageCount={pagination.pageCount}
			forcePage={pagination.selected}
			marginPagesDisplayed={1}
			pageRangeDisplayed={2}
			onPageChange={handlePageClick}
			containerClassName={
				"pagination w-fit flex items-center text-sm h-10 list-none justify-center m-auto"
			}
			activeClassName={"pagination__link--active text-lg"}
			disabledClassName={"pagination__link--disabled"}
		/>
	);
}
