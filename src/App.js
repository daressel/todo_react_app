import { useState } from "react";
import { AddItem } from "./components/AddItem";
import { List } from "./components/List";
import { Pagination } from "./components/Pagination";
import { SortFilterPanel } from "./components/SortFilterPanel";
import storage from "./db";

function App() {
  const [items, setItems] = useState(storage)
  const createId = items.length + 1;

  const handleAddItem = (e, name) => {
    e.preventDefault();
    const newItem = {
      id: createId,
      name: name,
      done: false,
      date: "10/11/22"
    }
    console.log(items);
    setItems([...items, newItem])
  }

  const hanleFilter = (e, ) => {

  }

  const handleDeleteItem = (id) => {
    const updateStorage = items.filter(item => item.id !== id)
    setItems(updateStorage)
  }

  const handleEditItem = (e, name, id) => {
    console.log(id);
    e.preventDefault();
    const cashItems = items.map(item => {
      if(item.id === id){
        item.name = name
      }
    })
    setItems(cashItems)
  }

  return (    
    <div>
      <h1 style={{alignSelf: "center"}}>ToDo</h1>
      <AddItem handleAddItem={handleAddItem}/>
      <SortFilterPanel hanleFilter = {hanleFilter}/>
      <List items={items} handleDeleteItem = {handleDeleteItem} handleEditItem={handleEditItem}/>
      <Pagination />
    </div>
  );
}

export default App;
