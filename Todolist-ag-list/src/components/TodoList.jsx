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

    const addTodo = () => {
        console.log("insert new Todo to todos array");
        setTodos([...todos, todo]);
        setTodo({ desc: '', date: '', priority: '' })
    };

    const deleteTodo = (index) => {
        setTodos((prevTodos) => prevTodos.filter((todo, i) => i !== index));
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
                    type="date"
                    name="date"
                    value={todo.date}
                    onChange={handleChange} />

                Priority:
                <input
                    type="dropdown"
                    name="priority"
                    value={todo.priority}
                    onChange={handleChange} />

                <button onClick={addTodo}>Add</button>
            </fieldset>

            <div className="todolistCentered">
                <TodoTable todos={todos} onDelete={deleteTodo} />
            </div>
        </>
    );
}