import React from "react";

function TodoTable(props) {
    return (
        <>
          <table>
            <tbody>
              <tr>
                <th>Date</th>
                <th>Description</th>
              </tr>
              {props.todos.map((todo, index) => (
                <tr key={index}>
                  <td>{todo.date}</td>
                  <td>{todo.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
}

export default TodoTable;

