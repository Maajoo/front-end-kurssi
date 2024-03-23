import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef, useState } from "react";
import { Button } from "@mui/material";


export default function MatkaGrid(props) {

    const [colDefs] = useState([
        { headerName: 'Kohde', field: 'kohde' },
        { headerName: 'Kesto', field: 'kesto' }
    ]);


    const gridRef = useRef();

    const deleteSelected = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            const removeIndex = gridRef.current.getSelectedNodes()[0].id;
            console.log("removeid: " + removeIndex);
            props.deleteByIndex(removeIndex);
        } else {
            alert('Select Row first!');
        }
    }

    return (
        <>

            <Button
                variant="contained"
                onClick={deleteSelected}>
                Poista valittu
            </Button>

            <h3>Matkat</h3>
            <div className="ag-theme-material"
                style={{ height: '900px', width: '70%', margin: 'auto' }}>
                <AgGridReact
                    columnDefs={colDefs}
                    rowData={props.places}
                    rowSelection="single"
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                >
                </AgGridReact>
            </div>
            
        </>
    )
}