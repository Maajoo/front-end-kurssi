import { AgGridReact } from "ag-grid-react";
import { useState, useRef } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, TextField, Stack } from "@mui/material";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import DeleteIcon from '@mui/icons-material/Delete';



export default function TodoGrid(props) {

    const gridRef = useRef();

    const [columnDefs] = useState([
        { field: 'desc', sortable: true, filter: true, width: 250, cellStyle: {textAlign: 'left'} },
        { field: 'date', sortable: true, filter: true, width: 250, cellStyle: {textAlign: 'left'} },
        {
            field: 'priority', sortable: true, filter: true, width: 200,
            cellStyle: params => params.value === "High" ? { color: 'red', textAlign: 'left' } :
                params.value === "Medium" ? { color: 'orange', textAlign: 'left' } :
                    params.value === "Low" ? { color: 'green', textAlign: 'left' } :
                        { color: 'black', textAlign: 'left' }
        },

    ]);

    const handleDelete = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            props.setTodos(props.todos.filter((todo, index) =>
                index != gridRef.current.getSelectedNodes()[0].id))
        }
        else {
            alert('Select a row first!');
        }
    };


    return (
        <>

            <Stack mt={2} direction="row" spacing={2} justifyContent="center" alignItems="center" width={700}>

                                <TextField
                                    label="Description"
                                    name="desc"
                                    value={props.todo.desc}
                                    onChange={props.handleChange}
                                />

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        value={props.todo.date}
                                        onChange={props.handleDate}
                                    />
                                </LocalizationProvider>

                                <FormControl style={{ width: 150 }}>
                                    <InputLabel >Priority</InputLabel>
                                    <Select
                                        value={props.todo.priority}
                                        label="Priority"
                                        onChange={(event) => props.handlePrio(event.target.value)}
                                    >
                                        <MenuItem value="High">High</MenuItem>
                                        <MenuItem value="Medium">Medium</MenuItem>
                                        <MenuItem value="Low">Low</MenuItem>
                                    </Select>
                                </FormControl>

                                <Button style={{ height: 55 }} variant="outlined" onClick={props.addTodo}>
                                    Add
                                </Button>

                                <Button style={{ height: 55 }} variant="outlined" color="error" onClick={handleDelete}>
                                    Delete <DeleteIcon style = {{height: 20}}/>
                                </Button>


                </Stack>
                <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
                    <AgGridReact
                        ref={gridRef}
                        onGridReady={params => gridRef.current = params.api}
                        columnDefs={columnDefs}
                        rowData={props.todos}
                        rowSelection="single"
                    />
                </div>
            </>
            );
}
