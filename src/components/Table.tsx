import { useMemo, useState } from "react";
import { useTable } from "react-table";
import studentType from "../configs/stuColumn";

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
		<div className="border-slate-500 w-full m-auto mt-10 rounded-lg ">
			<div className="w-fit truncate m-auto rounded-lg border-2 text-xl">
				<table {...getTableProps()}>
					<thead className="text-center text-white border-2 bg-secondary">
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th
										className="p-4 text-left border-2"
										{...column.getHeaderProps()}
									>
										{column.render("Header")}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody className="" {...getTableBodyProps()}>
						{rows.map((row) => {
							prepareRow(row);
							return (
								<tr className="hover:bg-light-gray border-2" {...row.getRowProps()}>
									{row.cells.map((cell) => (
										<td
											className="p-4 text-gray border-2"
											{...cell.getCellProps()}
										>
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
