import{useState,useEffect} from "react"
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DepartmentList from './DepartmentList';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  
  {
    field: 'userId',
    headerName: 'USER ID',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'body',
    headerName: 'Body',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    
  },
];


export default function DataGridDemo() {
  const [rows, setRows] =useState<any[]>([]);

  useEffect( 
    ()=>{
    const load=async () => {
    console.log("cDm");
    let url = ` https://jsonplaceholder.typicode.com/posts`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    setRows(parsedata);
    console.log(rows);

    };
    load();
  }, []);
  return (<div>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    <DepartmentList></DepartmentList>
    </div>
  );
}