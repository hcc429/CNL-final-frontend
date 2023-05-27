import { useMemo, useState } from "react";
import { useTable } from "react-table";
import studentType from "../pages/StudentList";

interface TableType {
	data: studentType[];
	columns: columnType[];
}

export default function Table(props: TableType): JSX.Element {
	const data = useMemo(() => props.data, [props.data]);
	const columns = useMemo(() => props.columns, []);
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
		columns,
		data,
	});
	return (
		<div className="border-2 border-slate-500 align-center w-fit m-auto mt-10 h-60 rounded-lg">
			<div className="w-fit truncate m-auto rounded-lg">
				<table {...getTableProps()}>
					<thead className="text-center text-primary">
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th className="p-4 text-left" {...column.getHeaderProps()}>
										{column.render("Header")}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row) => {
							prepareRow(row);
							return (
								<tr className="hover:bg-light-gray" {...row.getRowProps()}>
									{row.cells.map((cell) => (
										<td className="p-1 text-gray" {...cell.getCellProps()}>
											{cell.render("Cell")}
										</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
