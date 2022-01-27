import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

import {
  fetchApplications,
  deleteApplication,
} from "../../redux/ApplicationData/applicationDataSlice";

import styles from "./styles.module.css";

import Loading from "../../components/Loading";

/*eslint-disable */

import {
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination,
  useAsyncDebounce,
} from "react-table";

function DefaultColumnFilter() {
  return "";
}

function Table({ columns, data }) {
  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );
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
      defaultColumn, // Be sure to pass the defaultColumn option
    },
    useFilters, // useFilters!
    useGlobalFilter,
    usePagination
  );

  return (
    <>
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
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

function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

function ReferralList() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApplications());
  }, [dispatch]);

  const loading = useSelector((state) => state.applicationData.loading);
  const applications = useSelector(
    (state) => state.applicationData.applications
  );

  const columns = React.useMemo(() => [
    {
      Header: "Kişisel",
      columns: [
        {
          Header: "Adı",
          accessor: "firstName",
        },
        {
          Header: "Soyadı",
          accessor: "lastName",
        },
      ],
    },
    {
      Header: "Bilgi",
      columns: [
        {
          Header: "Kod",
          accessor: "applicationCode",
        },
        {
          Header: "Sebep",
          accessor: "reason",
        },
        {
          Header: "Durum",
          accessor: "status",
          Filter: SelectColumnFilter,
          filter: "includes",
        },
        {
          Header: "Kayıt Tarihi",
          accessor: "dateRegistration",
        },
        {
          Header: "Son Düzenleme Tarihi",
          accessor: "dateApproval",
        },
        {
          Header: "Seçenekler",
          accessor: "action",
          Cell: (row) => (
            <div className={styles.action}>
              <button
                onClick={(e) => handleEdit(row.row.original)}
                className={styles.editButton}
              >
                <AiOutlineEdit size={24} />
              </button>
              <button
                onClick={(e) => handleDelete(row.row.original)}
                className={styles.deleteButton}
              >
                <AiOutlineDelete size={24} />
              </button>
            </div>
          ),
        },
      ],
    },
  ]);

  const handleEdit = (row) => {
    navigate(`/admin/basvuru/${row.applicationCode}`, {
      state: { row },
    });
  };

  const handleDelete = (row) => {
    var answer = window.confirm("Silmek istediğinize emin misiniz?");
    if (answer) {
      dispatch(deleteApplication(row.id));
    }
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <Loading />
      </div>
    );
  }

  return (
    <section className={styles["referral-list"]}>
      <Table columns={columns} data={applications} />
    </section>
  );
}

export default ReferralList;
/* eslint-enable */
