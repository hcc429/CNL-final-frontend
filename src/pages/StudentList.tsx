import usePagination from "../hooks/usePagination";
import useAuth from "../hooks/useAuth";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import SettingForm from "../forms/SettingForm";
import { useState } from "react";
import { studentListConfig } from "../configs/stuColumn";
import { getRollcallResult } from "../utils/rollcall";
import useCourse from "../hooks/useCourse";

export default function StudentList(): JSX.Element {
	useAuth();
	const [pagination, setPagination] = usePagination([]);
	const [changeCourse, setChangeCourse] = useState<boolean>(false);
	const [courseName, courseKey] = useCourse(changeCourse);

	return (
		<div className="flex h-80v">
			<SettingForm />
			<div className="w-9/12 m-auto border-2">
				<div className="flex w-fit m-auto w-1/2 items-center">
					<button
						className="pr-2 pl-2 whitespace-nowrap w-fit border-2 m-5 rounded-md"
						onClick={async () => {
							const studentList = await getRollcallResult(courseKey);
							console.log(studentList);
							setChangeCourse((prevState) => !prevState);
							setPagination((prevState) => {
								return {
									...prevState,
									data: studentList,
								};
							});
						}}
					>
						Refresh
					</button>
					<div className="pr-2 pl-2 whitespace-nowrap w-fit m-2">
						course-key: {courseKey}
					</div>
					<div className="pr-2 pl-2 whitespace-nowrap w-fit m-2">
						course-name: {courseName}
					</div>
				</div>
				<Table data={pagination.currentData} columns={studentListConfig} />
				<Pagination pagination={pagination} setPagination={setPagination} />
			</div>
		</div>
	);
}
