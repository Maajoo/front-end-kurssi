// Import useState from react
import { useState } from "react";
import TodoTable from "./TodoTable";


export default function TodoList() {
    // Declare states
    const [todo, setTodo] = useState({ desc: '', date: '' });
    const [todos, setTodos] = useState([]);

    const handleChange = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    // Remember to call preventDefault() if using form
    const addTodo = () => {
        setTodos([...todos, todo]);
        setTodo({ desc: '', date: '' })
    };


    return (
        <>
            <h2>Simple Todolist</h2>

            

                <fieldset>
                    <legend>Add todo:</legend>
                

                Description:
                <input
                    type="text"
                    name="desc"
                    placeholder="Anna kuvaus"
                    value={todo.desc}
                    onChange={handleChange} />

                Date:
                <input
                    type="text"
                    name="date"
                    placeholder="Anna päivä"
                    value={todo.date}
                    onChange={handleChange} />

                <button onClick={addTodo}>Add</button>
                </fieldset>
            

            <TodoTable todos={todos} />
        </>
    );
}