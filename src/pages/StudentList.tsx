import usePagination from "../hooks/usePagination";
import useAuth from "../hooks/useAuth";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import { studentListConfig, studentList } from "../configs/stuColumn";
import SettingForm from "../forms/SettingForm";

export default function StudentList(): JSX.Element {
	useAuth();
	const [pagination, setPagination] = usePagination(studentList);
	return (
		<div className="flex h-80v">
			<SettingForm />
			<div className="m-auto w-11/12">
				<Table data={pagination.currentData} columns={studentListConfig} />
				<Pagination pagination={pagination} setPagination={setPagination} />
			</div>
		</div>
	);
}
