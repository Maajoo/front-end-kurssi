export default function MatkaTable(props) {
    return (
        <table>
            <tbody>
                <tr><th>Matka</th></tr>
                {props.ITSEKEKSITTYNIMImatkat.map((matka, index) => (
                    <tr key={index}>
                        <td>{matka.kohdemaa}</td>
                        <td>{matka.kesto}</td>
                        <td><button onClick={() => props.ITSEKEKSITTYpoistaMatka(index)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}