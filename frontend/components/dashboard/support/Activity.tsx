import React, { FC } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { styled } from "@mui/system";

const columns: GridColDef[] = [
  { field: "activity", headerName: "فعالیت", flex: 1, minWidth: 200 },
  { field: "resource", headerName: "منبع", flex: 1, minWidth: 200 },
  {
    field: "project",
    headerName: "پروژه",
    flex: 1,
    minWidth: 200,
  },
  {
    field: "triggered",
    headerName: "ساخته شده توسط",
    flex: 1,
    minWidth: 200,
  },
  {
    field: "date",
    headerName: "زمان",
    flex: 1,
    minWidth: 200,
  },
];

const rows = [
  {
    id: 1,
    activity: "تغییر دادن تنظیمات سرور",
    resource: "ارگو",
    project: "هتزنر",
    triggered: "صبحان ابولقاسمی",
    date: "8 دقیقیه پیش",
  },
  {
    id: 2,
    activity: "تغییر دادن تنظیمات سرور",
    resource: "ارگو",
    project: "هتزنر",
    triggered: "صبحان ابولقاسمی",
    date: "5 دقیقیه پیش",
  },
  {
    id: 3,
    activity: "ساخت سرور",
    resource: "ارگو",
    project: "هتزنر",
    triggered: "صبحان ابولقاسمی",
    date: "6 دقیقیه پیش",
  },
];

const Activity: FC = () => {
  return (
    <Container>
      <h4>فعالیت ها </h4>
      <div style={{ height: 400, width: "100%", overflowX: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          scrollbarSize={10}
          hideFooterPagination
          showCellRightBorder={false}
          disableColumnFilter
        />
      </div>
    </Container>
  );
};

const Container = styled("div")({
  padding: '3rem',
  width: '100%',
  h4 :{
    fontWeight: 'bold',
    fontSize : "1.2rem",
    marginBottom: '2rem'
  },
  '.MuiDataGrid-columnSeparator--sideRight' :{
    display: 'none'
  },
  '.MuiDataGrid-columnHeaders	': {
    backgroundColor: '#f5f5f5',
  }
});

export default Activity;
