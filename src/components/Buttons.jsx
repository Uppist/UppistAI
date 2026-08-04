/** @format */

import { useState } from "react";
import { Pagination, Stack } from "@mui/material";

export default function PaginationRounded({ onOptionValue, totalItems = 0 }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const pageCount = Math.max(1, Math.ceil(totalItems / rowsPerPage));
  const currentPage = Math.min(page, pageCount - 1);

  const handlePageChange = (_, value) => {
    setPage(value - 1);
  };

  const handleRowsPerPageChange = (event) => {
    const selectedValue = Number(event.target.value);
    setRowsPerPage(selectedValue);
    setPage(0);
    handleOptionValue(selectedValue);
  };

  const handleOptionValue = (value) => {
    if (onOptionValue) {
      onOptionValue(value);
    }
    console.log("Selected option value:", value);
  };

  return (
    <div className='flex items-center justify-between w-full'>
      <Stack spacing={3}>
        <Pagination
          count={pageCount}
          page={currentPage + 1}
          onChange={handlePageChange}
          variant='outlined'
          shape='rounded'
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#2B2B2B",
              fontWeight: 500,
              fontSize: "14px",
              fontFamily: "Inter, sans-serif",
              borderRadius: "4px",
              minWidth: "40px",
              height: "40px",
              border: "1px solid #E5E7EB",
            },
            "& .MuiPaginationItem-root:hover": {
              // backgroundColor: "#F9F5EE",
              backgroundColor: "#FF9200",
              color: "white",
            },
            "& .MuiPaginationItem-previousNext": {
              minWidth: "44px",
            },
            "& .Mui-selected": {
              backgroundColor: "#FF9200",
              color: "white",
              border: "none",
              fontWeight: 700,
            },
          }}
        />
      </Stack>

      <div className='flex items-center gap-2'>
        <select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className='h-10 rounded-md border border-gray-300 bg-white p-3 text-sm text-gray-700'
        >
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
    </div>
  );
}
