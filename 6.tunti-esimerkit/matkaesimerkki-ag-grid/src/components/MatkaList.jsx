import { useState } from "react";
//import MatkaTable from "./MatkaTable";
import MatkaGrid from "./MatkaGrid";

export default function MatkaList() {

    // states
    const [matka, setMatka] = useState({ kohde: '', kesto: '' });
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
        setMatkat(matkat.filter((matka, i) => i != index));
    }

    return (
        <>
            <form onSubmit={addMatka}>
                <p> <label>kohde </label><input type="text" name="kohde" value={matka.kohde} onChange={inputChanged} /></p>
                <p><label>Kesto (päivinä) </label><input type="text" name="kesto" value={matka.kesto} onChange={inputChanged} /></p>
                <input type="submit" value="lisää" />
            </form>

            <MatkaGrid matkat={matkat} poistaMatka={deleteByIndex} />
        </>
    )
}