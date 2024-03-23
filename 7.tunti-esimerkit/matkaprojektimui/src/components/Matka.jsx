import { useState } from "react";
import MatkaGrid from "./MatkaGrid";
import { Button, Stack, TextField } from "@mui/material";

export default function Matka() {

    //states
    const [matka, setMatka] = useState({
        kohde: '',
        kesto: ''
    });

    const [matkat, setMatkat] = useState([]);

    const inputChanged = (event) => {
        setMatka({ ...matka, [event.target.name]: event.target.value });
    }

    const addMatka = () => {

        if (!matka.kohde.trim()) {
            // Show alert if kohde is empty
            alert("Syötä kohde.");
            return;
        }
        setMatkat([...matkat, matka]);
        setMatka({ kohde: '', kesto: '' });
    }

    const deleteByIndex = (index) => {
        console.log("delete matka, jonka index= " + index);
        setMatkat(matkat.filter((matka, i) => i != index));
    }

    return (
        <>
            <h3>Matka</h3>

            <Stack mt={2} direction="row" spacing={2} justifyContent="center" alignItems="center">

                <TextField
                    label="Kohde"
                    name="kohde"
                    value={matka.kohde}
                    onChange={inputChanged}
                />

                <TextField
                    label="Kesto"
                    name="kesto"
                    value={matka.kesto}
                    onChange={inputChanged}
                />

                <Button variant="contained" onClick={addMatka}>
                    Add
                </Button>
            </Stack>
            {
                <MatkaGrid
                    places={matkat}
                    deleteByIndex={deleteByIndex}
                />}
        </>
    )
}