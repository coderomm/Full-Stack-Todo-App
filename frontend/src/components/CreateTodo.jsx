import { useState } from "react";

export function CreateTodo(todos, setTodos) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTodo = () => {
        const newTodo = { title, description };
        fetch("http://localhost:5000/todo", {
            method: "POST",
            body: JSON.stringify(newTodo),
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then(() => {
                alert("Todo added");
                setTodos([...todos, newTodo]);
                setTitle("");
                setDescription("");
            })
            .catch(error => console.error('Error:', error));
    };

    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Enter title" id="title"
            onChange={(e) => setTitle(e.target.value)} /> <br />

        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Enter description"
            id="description"
            onChange={(e) => setTitle(e.target.value)} /> <br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={handleAddTodo}>Add a todo</button>
    </div >
}