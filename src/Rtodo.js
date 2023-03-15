import React, { useState } from "react";
import { FaEdit, FaPlusCircle, FaTrash } from "react-icons/fa";

const Rtodo = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const [tog, setTog] = useState(true);
  const [edit, setEdit] = useState(null);

  function addlist() {
    if (input === "") {
    }else if(input && !tog){
    setItem(
        item.map((elem)=> {
            if(elem.id === edit){
                return {...elem, name:input}
            }
            return elem
        })

        )
        setTog(true);
        setInput("")
        setEdit(null)
    }
    
    else {
      let inputdata = {
        id: Math.floor(Math.random() * 100 + 1).toString(),
        name: input,
      };
      setItem([...item, inputdata]);
      setInput("");
    }
  }

  function delette(id) {
    const updatedItem = item.filter((it) => {
      return id !== it.id;
    });
    setItem(updatedItem);
  }

  function editt(id) {
    const editItem = item.find((elem) => id === elem.id);
    setTog(false);
    setInput(editItem.name)
    setEdit(id)
  }

  function keyp(e){
   if(input !== "" && e.key === 'Enter'){
    let inputdata = {
        id: Math.floor(Math.random() * 100 + 1).toString(),
        name: input,
      };
      setItem([...item, inputdata]);
   
    setInput("");
   }
  }

  function removeall() {
    setItem([]);
  }
  return (
    <div className="main_div">
      <div className="center_div">
        <h3>ToDo List</h3>
        <br />

        <input
          type="text"
          placeholder="Add a task"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyPress={keyp}
        />

        {tog ? (
          <FaPlusCircle onClick={addlist} />
        ) : (
          <FaEdit onClick={addlist} />
        )}

        <ol>
          {item.map((it) => {
            return (
              <div className="todo_style" key={it.id}>
                {/* <FaEdit onClick={editt(it.id)} /> */}
                <span onClick={()=> delette(it.id)}><FaTrash /></span>
                <span onClick={()=> editt(it.id)}><FaEdit /></span>

                <li>{it.name}</li>
              </div>
            );
          })}
        </ol>

        <div>
          <button className="remove_all" onClick={removeall}>
            Remove all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rtodo;
