
import { useState } from 'react';
import './App.css';
// import Todo from './Todo';

function App() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const [toggle, setToggle] = useState(true)
  const [edit, setEdit] = useState(null)


  function listofitems() {             // by this u r getting the input value to display in li
    // setItem((olditem) => {
    //   return [...olditem, input]
    // })
    if (input === "") {
    } else if (input && !toggle) {
     
      setItem(item.map((elem) => {
        if (elem.id === edit) {
          return {...elem, name:input}
        }
        return elem;
      }))

      setToggle(true);

      setInput("");
  
      setEdit(null);
    }
    else {
      let allinputdata = { id: Math.floor((Math.random() * 100) + 1).toString(), name: input }
      setItem([...item, allinputdata]);
      setInput("")
    }

  }

  function keyp(e) {
    if (e.key === 'Enter') {
      setItem((olditem) => {
        return [...olditem, input]
      })
      setInput("")
    }
  }

  function deleteitem(index) {
    // console.log('delete')

    // setItem((olditem)=>{
    //  return  olditem.filter((e,i)=>{
    //     return i!==id;
    //   })

    // })

    const updateditems = item.filter((elem) => {
      return index !== elem.id;
    });

    setItem(updateditems);
  }

  function edititem(id) {
    let neweditItem = item.find((elem) => {
      return elem.id === id
    });
    console.log(neweditItem)

    setToggle(false)

    setInput(neweditItem.name)

    setEdit(id)
  }

  const removeall = () => {
    setItem([])
  }
  return (
    <div className="main_div">
      <div className='center_div'>
        <br />
        <h1>Todo List</h1>
        <br />
        <input type="text" onChange={(e) => setInput(e.target.value)} placeholder='Add an items' value={input} onKeyDown={keyp} />

        {
          toggle ? <i class="fa-solid fa-plus btn" onClick={listofitems}/> :
            <i class="fa-solid fa-pen-fancy" onClick={listofitems}/>
        }
        <ol>

          {
            item.map((it) => {
             return (
                <div className='todo_style'>
                  <i class="fa-solid fa-pen-fancy" onClick={() => {
                    edititem(it.id)
                  }} />
                
                  <i class="fa-solid fa-trash" 
                  onClick={() => {
                    deleteitem(it.id)
                  }} />

                  <li>{it.name} </li>

                </div>
              )
            })
          }
        </ol>

        <div>
          <button className='remove_all' onClick={removeall}>Remove all</button>
        </div>
      </div>

    </div>
  );
}

export default App;
