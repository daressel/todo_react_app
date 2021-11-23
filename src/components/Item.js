import { useState } from "react";

const Item = ({item, handleDeleteItem, handleEditItem}) => {
  const [inputField, setInputField] = useState(false);
  const [newName, setNewName] = useState(item.name);
  const [status, setStatus] = useState(item.done)

  const changeText = (e) => {
    setNewName(e.target.value)
  }

  const handleClick = (e) => {
    if(e.target.className === 'item-details' || e.target.className === 'item-name'){
      inputField ? setInputField(false) : setInputField(true)
    }
  }
  return ( 
    <div className="item-details" onClick={handleClick}>
      <div className="status">
        <input
          className="check-box"
          type="checkbox"
          id={'check-' + item.id.substr(0,8)}
          checked={status}
          onChange={() => setStatus(!status)}
        />
        <label htmlFor={'check-' + item.id.substr(0,8)} ></label>
        {!inputField && <span className="item-name">{item.name}</span>}
        {inputField &&
          <form className="edit-item-form" onSubmit={(e) => {handleEditItem(e, newName, item.id); setInputField(false)}}>
            <div className="edit-item">
              <input type="text" size="40" value={newName} onChange={changeText}></input>
            </div>
          </form>
        }     
      </div>
      <div>
        <span>{item.date}</span>
        <span className="action" onClick={() => handleDeleteItem(item.id)}>
          <i className="fas fa-trash"></i>
        </span>
      </div>
      
    </div>
      
  );
}
 
export default Item;