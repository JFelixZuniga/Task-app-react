import React, { useState } from "react";

function App() {
  const [userName, setUserName] = useState("JFZuniga");
  const [taskItems, setTaskItems] = useState([
    { name: "Task one", done: false },
    { name: "Task two", done: false },
    { name: "Task three", done: true },
    { name: "Task four", done: false },
  ]);

  const taskTableRows = () => {
    return taskItems.map((task) => (
      <tr key={task.name}>
        <td>{task.name}</td>
      </tr>
    ));
  };

  return (
    <div>
      <h1>Hola mundo</h1>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{taskTableRows()}</tbody>
      </table>
    </div>
  );
}

export default App;
