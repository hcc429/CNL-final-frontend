import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import { studentListConfig, studentList } from "../configs/stuColumn";

export default function StudentList(): JSX.Element {
	const [pagination, setPagination] = usePagination(studentList);
	return (
		<div>
			<Table data={pagination.currentData} columns={studentListConfig} />
			<Pagination pagination={pagination} setPagination={setPagination} />
		</div>
	);
}
