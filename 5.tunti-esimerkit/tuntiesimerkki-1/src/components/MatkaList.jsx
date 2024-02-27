import { useState } from "react";
import MatkaTable from "./MatkaTable";

export default function MatkaList() {

    // states
    const [matka, setMatka] = useState({ kohdemaa: '', kesto: '' });
    const [matkat, setMatkat] = useState([]);

    const inputChanged = (event) => {
        setMatka({ ...matka, [event.target.name]: event.target.value });
    }
    const addMatka = (event) => {
        event.preventDefault();
        console.log("insert new matka to matkat array");
        setMatkat([...matkat, matka]);
    }

    const deleteByIndex = (index) => {
        console.log(index);
        setMatkat(matkat.filter((matka, i) => i !== index));
    }

    return (
        <>
            <form onSubmit={addMatka}>
                <p> <label>Kohdemaa </label><input type="text" name="kohdemaa" value={matka.kohdemaa} onChange={inputChanged} /></p>
                <p><label>Kesto (päivinä) </label><input type="text" name="kesto" value={matka.kesto} onChange={inputChanged} /></p>
                <input type="submit" value="lisaa" />
            </form>

            <MatkaTable ITSEKEKSITTYNIMImatkat={matkat} ITSEKEKSITTYpoistaMatka={deleteByIndex} />
        </>
    )
}