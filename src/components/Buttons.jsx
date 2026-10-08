/** @format */

import { Pagination, Stack } from "@mui/material";

export default function PaginationRounded({ pagination, onPageChange }) {
  if (!pagination || pagination.totalPages <= 1) {
    return null;
  }

  const handlePageChange = (_, value) => {
    onPageChange(value);
  };

  return (
    <div className="flex items-center justify-between w-full">
      <Stack spacing={3}>
        <Pagination
          count={pagination.totalPages}
          page={pagination.page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
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
    </div>
  );
}
