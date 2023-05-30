import usePagination from "../hooks/usePagination";
import useAuth from "../hooks/useAuth";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import Button from "../components/Button";
import Cookies from "js-cookie";
import SettingForm from "../forms/SettingForm";
import { useEffect, useState } from "react";
import { studentListConfig, studentList } from "../configs/stuColumn";
import { getRollcallResult } from "../utils/rollcall";

export default function StudentList(): JSX.Element {
	useAuth();
	const [pagination, setPagination] = usePagination([]);
	const [courseName, setCourseName] = useState("1");
	const [courseKey, setCourseKey] = useState("1");
	useEffect(() => {
		const newCourseName: string = Cookies.get("courseName");
		const newCourseKey: string = Cookies.get("courseKey");
		setCourseKey(newCourseKey);
		setCourseName(newCourseName);
	}, [])
	return (
		<div className="flex h-80v">
			<SettingForm />
			<div className="w-9/12 m-auto border-2">
				<div className="flex w-fit m-auto w-1/2 items-center">
					<button
						className="pr-2 pl-2 whitespace-nowrap w-fit border-2 m-5"
						onClick={async () => {
							const newCourseName: string = Cookies.get("courseName");
							const newCourseKey: string = Cookies.get("courseKey");
							const studentList = await getRollcallResult(newCourseKey);
							console.log(studentList);
							setCourseKey(newCourseKey);
							setCourseName(newCourseName);
							setPagination((prevState) => {
								return {
									...prevState,
									data: studentList,
								};
							});
						}}
					>
						Refresh Student List
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
