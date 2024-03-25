import { AgGridReact } from "ag-grid-react";
import { useState, useRef } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function TodoGrid(props) {

    const gridRef = useRef();

    const [columnDefs] = useState([
        { field: 'desc', sortable: true, filter: true, floatingFilter: true },
        { field: 'date', sortable: true, filter: true, floatingFilter: true },
        {
            field: 'priority', sortable: true, filter: true, floatingFilter: true,
            cellStyle: params => params.value === "High" ? { color: 'red' } :
                params.value === "Medium" ? { color: 'orange' } :
                    params.value === "Low" ? { color: 'green' } :
                        { color: 'black' }
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

            <table>

                <tbody>
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Description"
                                name="desc"
                                value={props.todo.desc}
                                onChange={props.handleChange}
                            />
                        </td>
                        <td>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    value={props.todo.date}
                                    onChange={props.handleDate}
                                />
                            </LocalizationProvider>




                            {/* <input
                                type="date"
                                placeholder="Date"
                                name="date"
                                value={props.todo.date}
                                onChange={props.handleChange}
                            /> */}
                        </td>
                        <td>
                            <select
                                name="priority"
                                value={props.todo.priority}
                                onChange={props.handleChange}>
                                <option value="" disabled>Priority</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </td>
                        <td>
                            <button onClick={props.addTodo}>Add</button>
                        </td>
                        <td>
                            <button onClick={handleDelete}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
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
