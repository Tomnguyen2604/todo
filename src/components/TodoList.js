import React from "react";

function TodoList(props) {
    return (
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {props.items.map((item) => (
                <li
                    key={item.id}
                    style={{
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <div style={{ marginRight: "10px" }}>{item.text}</div>
                    <button
                        style={{
                            padding: "10px",
                            border: "none",
                            borderRadius: "5px",
                            backgroundColor: "#007bff",
                            color: "white",
                        }}
                        onClick={() => props.onDelete(item.id)}
                    >
                        Delete
                    </button>
                    <button
                        style={{
                            padding: "10px",
                            border: "none",
                            borderRadius: "5px",
                            backgroundColor: "#007bff",
                            color: "white",
                        }}
                        onClick={() => props.onEdit(item.id, item.text)}
                    >
                        Edit
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
