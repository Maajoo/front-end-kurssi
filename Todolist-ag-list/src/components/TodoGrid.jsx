import { AgGridReact } from "ag-grid-react";
import { useState, useRef } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme

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
        <button onClick={handleDelete}>Delete</button>
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
