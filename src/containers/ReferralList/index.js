import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import API from "../../config/api";

import styles from "./styles.module.css";

/*eslint-disable */

import { useTable, usePagination } from "react-table";

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <>
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

function ReferralList() {
  const navigate = useNavigate();

  const columns = React.useMemo(() => [
    {
      Header: "Name",
      columns: [
        {
          Header: "First Name",
          accessor: "firstName",
        },
        {
          Header: "Last Name",
          accessor: "lastName",
        },
      ],
    },
    {
      Header: "Info",
      columns: [
        {
          Header: "Age",
          accessor: "age",
        },
        {
          Header: "Status",
          accessor: "status",
        },
        {
          Header: "Profile Progress",
          accessor: "progress",
        },
        {
          Header: "Action",
          accessor: "action",
          Cell: (row) => (
            <div>
              <button onClick={(e) => handleEdit(row.row.original)}>
                Edit
              </button>
            </div>
          ),
        },
      ],
    },
  ]);

  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios(API);
    setData(result.data);
  }, []);

  console.log(data);

  const handleEdit = (row) => {
    navigate(
      `/admin/basvuru/${row.applicationCode}`,
      {
        state: { row },
      },
      { replace: true }
    );
  };

  return (
    <section className={styles["referral-list"]}>
      <Table columns={columns} data={data} />
    </section>
  );
}

export default ReferralList;
/* eslint-enable */
