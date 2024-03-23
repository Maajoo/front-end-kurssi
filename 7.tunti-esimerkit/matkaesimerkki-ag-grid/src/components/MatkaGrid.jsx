import { AgGridReact } from "ag-grid-react";
import { useState, useRef } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme

export default function MatkaGrid(props) {

    const [colDefs] = useState([
        { headerName: "kohteeni", field: "kohde", filter: true },
        {
            field: "kesto", sortable: false,
            cellStyle: params => params.value > 7 ? { color: 'red' } : { color: 'black' }
        }
    ]);

    const gridRef = useRef();

    const onDelete = () => {
        const removeId = gridRef.current.getSelectedNodes()[0].id
        console.log("removeid =" + removeId);
        props.poistaMatka(removeId);
    }

    return (
        <>
            <button onClick={onDelete}>Poista valittu</button>
            <div className="keskitys">
                <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
                    <AgGridReact
                        ref={gridRef}
                        onGridReady={params => gridRef.current = params.api}
                        rowData={props.matkat}
                        columnDefs={colDefs}
                        rowSelection="single"
                    />
                </div>
            </div>
        </>
    );
}