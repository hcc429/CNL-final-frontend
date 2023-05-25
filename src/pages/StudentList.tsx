import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import columnType from "../components/Table";

type studentType = {
	id: string;
	name: string;
	timeStamp: string;
};

const studentListConfig: columnType[] = [
	{ Header: "Student ID", accessor: "id" },
	{ Header: "Student Name", accessor: "name" },
	{ Header: "Login Timestamp", accessor: "timeStamp" },
];

const studentList: studentType[] = [
	{ id: "b09902025", name: "許庭碩", timeStamp: new Date().toUTCString() },
	{ id: "b09902036", name: "餅j", timeStamp: new Date().toUTCString() },
	{ id: "b09902063", name: "董偉", timeStamp: new Date().toUTCString() },
	{ id: "b09902112", name: "沈建宇", timeStamp: new Date().toUTCString() },
	{ id: "b09902127", name: "曾柏瑜", timeStamp: new Date().toUTCString() },
	{ id: "b09902134", name: "鄭鴻鈞", timeStamp: new Date().toUTCString() },
];

export default function StudentList(): JSX.Element {
	const [pagination, setPagination] = usePagination(studentList);
	return (
		<div>
			<Table data={pagination.currentData} columns={studentListConfig} />
			<Pagination pagination={pagination} setPagination={setPagination} />
		</div>
	);
}
