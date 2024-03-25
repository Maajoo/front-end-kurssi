import { useState } from "react";
import TodoGrid from "./TodoGrid";


export default function TodoList() {

    // Declare states
    const [todo, setTodo] = useState({ desc: '', date: null, priority: '' });
    const [todos, setTodos] = useState([]);

    // HANDLE CHANGES
    const handleChange = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    // HANDLE DATE CHANGES
    const handleDate = (date) => {
        setTodo({ ...todo, date: date });
    }

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
            <TodoGrid
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                handleChange={handleChange}
                handleDate={handleDate}
                addTodo={addTodo} />
        </>
    );
}