import React, { useState } from 'react';
import "./ToDo.css";
import {addToDo, deleteToDo, removeToDo} from "../actions/index";
import {useDispatch, useSelector} from "react-redux";


const ToDo = () => {

  const [inputData, setInputData] = useState("");
  const list = useSelector((state)=>state.todoReducers.list); 
  const dispatch =useDispatch();  
  return (
    <>
      <div className="main-div">
            <div className="child-div">
                <figure>
                    <figcaption>Add Your List Here ✌</figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder="✍ Add Items..."
                       value={inputData}
                       onChange ={(event)=>setInputData(event.target.value)}
                    />
                    <i className="fa fa-plus add-btn" title="Add Item" onClick={()=>dispatch(addToDo(inputData),
                      setInputData(''))}></i> 
                                                    
                </div>

                <div className="showItems">
                {
                  list.map((elem) => {
                    return (
                      <div className="eachItem" key={elem.id}>
                        <h3>{elem.data}</h3>
                        <div className="todo-btn">
                          <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => dispatch(deleteToDo(elem.id))}></i>
                        </div>
                      </div>
                    )
                  })
                }
                                
                </div> 

                <div className="showItems">
                  <button className="btn effect04" data-sm-link-text="Remove All" onClick={() => dispatch(removeToDo())}><span> CHECK LIST </span> </button>
                </div>   

                    
            </div>
        </div>        

    </>
  )
}

export default ToDo;

