import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export default function useCourse(changeCourse: boolean): boolean {
	const [courseName, setCourseName] = useState<string>("");
	const [courseKey, setCourseKey] = useState<string>("");
	useEffect(() => {
		const newCourseName: string = Cookies.get("courseName");
		const newCourseKey: string = Cookies.get("courseKey");
		if (newCourseName) setCourseName(newCourseName);
		if (newCourseKey) setCourseKey(newCourseKey);
	}, [changeCourse]);
	return [courseName, courseKey];
}
