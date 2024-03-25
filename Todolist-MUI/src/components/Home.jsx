import { Button } from "@mui/material";

export default function Home() {


    const nappi = () => {
        alert("MEE TEKEE HOMMII")
    }

    return (
        <>
            <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
                <Button
                    style={{ margin: 50, fontSize: 100 }}
                    variant="contained"
                    onClick={nappi}>
                    MORO
                </Button>
            </div>
        </>
    );
}