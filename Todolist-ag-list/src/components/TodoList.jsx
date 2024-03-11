import { useState } from "react";
import TodoGrid from "./TodoGrid";


export default function TodoList(props) {

    // Declare states
    const [todo, setTodo] = useState({ desc: '', date: '', priority: '' });
    const [todos, setTodos] = useState([]);

    // HANDLE CHANGES
    const handleChange = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    // ADD
    const addTodo = (event) => {
        event.preventDefault();
        if (todo.desc != '' && todo.date != '' && todo.priority != '') {
            console.log("insert new Todo to todos array");
            setTodos([...todos, todo]);
        }
        else {
            console.log("Please fill in all fields.");
            window.alert("Please fill in all fields.");

        }
    };



    return (
        <>
            {/* <table>

                <tbody>
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Description"
                                name="desc"
                                value={todo.desc}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                type="date"
                                placeholder="Date"
                                name="date"
                                value={todo.date}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <select
                                name="priority"
                                value={todo.priority}
                                onChange={handleChange}>
                                <option value="" disabled>Priority</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </td>
                        <td>
                            <button onClick={addTodo}>Add</button>
                        </td>

                    </tr>
                </tbody>
            </table> */}
            <TodoGrid todo={todo} todos={todos} setTodos={setTodos} handleChange={handleChange} addTodo={addTodo} />
        </>
    );
}