import { useState } from "react";

export function CreateTodo(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Enter title" name="title" id="title" onChange={function (e) {
            setTitle(e.target.value);
        }} /> <br />

        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Enter description" name="description" id="description" onChange={function (e) {
            setDescription(e.target.value);
        }} /> <br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            fetch("http://localhost:5000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function (res) {
                    const json = await res.json();
                    alert("Todo added")
                })
        }}>Add a todo</button>
    </div>
}