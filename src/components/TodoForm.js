import React, { useState, useEffect } from "react";

function TodoForm(props) {
    const [text, setText] = useState(props.editItem ? props.editItem.text : "");

    function handleSubmit(event) {
        event.preventDefault();
        if (!text) {
            return;
        }
        if (props.editItem) {
            props.onSubmit({ id: props.editItem.id, text });
        } else {
            props.onSubmit({ id: Date.now(), text });
        }
        setText("");
    }

    useEffect(() => {
        if (props.editItem) {
            setText(props.editItem.text);
        }
    }, [props.editItem]);

    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                backgroundColor: props.theme.background,
                color: props.theme.text,
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
            }}
        >
            <input
                type="text"
                value={text}
                onChange={handleChange}
                style={{
                    flexGrow: 1,
                    padding: "10px",
                    border: "none",
                    borderRadius: "5px",
                    marginRight: "10px",
                }}
            />
            <button
                type="submit"
                style={{
                    padding: "10px",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#007bff",
                    color: "white",
                }}
            >
                {props.editItem ? "Update" : "Add"}
            </button>
        </form>
    );
}

export default TodoForm;
