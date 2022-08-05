import { useState } from "react";
import "./App.css";
const Bpp = () => {
    const [todos, setTodo] = useState([
        { id: "a1", title: "Nhan duyen huu sinh" },
        { id: "a2", title: "Nhan sinh huu duyen " }
    ])
    const [name, setName] = useState("")
    const handleOnChange = (event) => {
        setName(event.target.value)
    };
    const handleOnClick = (event) => {
        if (!name) {
            alert("empty name");
            return
        };

        let todo = { id: "a3", title: name }
        setTodo([...todos, todo])
        setName('')
    };
    return (
        <>

            <main>
                <div className="todo-container">
                    {todos.map(e => {
                        return <li key={e.id}>{e.title}</li>
                    })}

                </div>
                <input type="text" value={name} onChange={(event) => { handleOnChange(event) }} />
                <button type="button" onClick={event => { handleOnClick(event) }} >Click </button>
            </main>

        </>
    )
}
export default Bpp

