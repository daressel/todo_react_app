import { useState } from "react";
import { AddItem } from "./components/AddItem";
import { List } from "./components/List";
import { Pagination } from "./components/Pagination";
import { SortFilterPanel } from "./components/SortFilterPanel";
import storage from "./db";
import uuid from 'react-native-uuid';

function App() {
  const [items, setItems] = useState(storage)
  const [filteredItems, setfilteredItems] = useState(items);
  const [itemsOnPage, setItemsOnPage] = useState(items.slice(0, 5));
  
  const handleAddItem = (e, name) => {
    e.preventDefault();
    const newItem = {
      id: uuid.v4(),
      name: name,
      done: false,
      date: "10/11/22"
    }
    console.log(items);
    setItems([...items, newItem])
  }

  const handleFilteredItems = (typeFilter='all') => {
    switch(typeFilter) {
      case 'all':
        setfilteredItems(items)
        break;
      case 'done':
        setfilteredItems(items.filter(item => item.done))
        break;
      case 'undone':
        setfilteredItems(items.filter(item => !item.done))
        break;
      default:
        setfilteredItems(items)
        break;
    }
    setItemsOnPage(filteredItems.slice(0, 5))
  }

  const handleDeleteItem = (id) => {
    console.log(id);
    console.log(items[0].id);
    const updateStorageItems = items.filter(item => item.id != id)
    const updateFilteredItems = filteredItems.filter(item => item.id != id)
    const updateShowItems = itemsOnPage.filter(item => item.id != id)
    
    setItems(updateStorageItems)
    setfilteredItems(updateFilteredItems)
    setItemsOnPage(updateShowItems)
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

  const handlePage = (number=0) => {
    setItemsOnPage(filteredItems.slice(number*5, (number+1)*5))
  }

  return (    
    <div>
      <h1 style={{alignSelf: "center"}}>ToDo</h1>
      <AddItem handleAddItem={handleAddItem}/>
      <SortFilterPanel handleFilter={handleFilteredItems}/>
      <List items={itemsOnPage} handleDeleteItem = {handleDeleteItem} handleEditItem={handleEditItem}/>
      <Pagination items={filteredItems} handlePage={handlePage}/>
    </div>
  );
}

export default App;
