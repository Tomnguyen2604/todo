import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { lightTheme, darkTheme } from "./components/themes";
import "./App.css";

function App() {
    const [items, setItems] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const [theme, setTheme] = useState("light");

    function handleSubmit(item) {
        setItems([...items, item]);
    }

    function handleDelete(id) {
        const filteredItems = items.filter((item) => item.id !== id);
        setItems(filteredItems);
    }

    function handleEdit(id, text) {
        setEditing(true);
        setEditItem({ id, text });
    }

    function handleUpdate(item) {
        const updatedItems = items.map((currentItem) =>
            currentItem.id === item.id ? item : currentItem
        );
        setItems(updatedItems);
        setEditing(false);
        setEditItem(null);
    }

    function handleThemeChange(event) {
        setTheme(event.target.value);
    }

    return (
        <div
            className="App"
            style={{
                backgroundColor:
                    theme === "light"
                        ? lightTheme.background
                        : darkTheme.background,
            }}
        >
            <div>
                <select value={theme} onChange={handleThemeChange}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
            {editing ? (
                <TodoForm
                    onSubmit={handleUpdate}
                    editItem={editItem}
                    theme={theme === "light" ? lightTheme : darkTheme}
                />
            ) : (
                <div>
                    <TodoList
                        items={items}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                        theme={theme === "light" ? lightTheme : darkTheme}
                    />
                    <TodoForm
                        onSubmit={handleSubmit}
                        theme={theme === "light" ? lightTheme : darkTheme}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
